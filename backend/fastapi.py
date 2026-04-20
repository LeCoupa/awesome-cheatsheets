# ##############################################################################
# FASTAPI CHEATSHEET
# Based on FastAPI official documentation: https://fastapi.tiangolo.com/
# ##############################################################################


# ##############################################################################
# INSTALLATION
# ##############################################################################

# pip install fastapi
# pip install "uvicorn[standard]"        # ASGI server to run FastAPI
# pip install "fastapi[all]"             # installs fastapi + uvicorn + extras

# Run the development server
# uvicorn main:app --reload              # main = filename, app = FastAPI instance
# uvicorn main:app --host 0.0.0.0 --port 8000 --reload


# ##############################################################################
# BASIC APP SETUP
# ##############################################################################

from fastapi import FastAPI

app = FastAPI(
    title="My API",                      # shown in auto-generated docs
    description="API description here",
    version="1.0.0",
)

# Auto-generated interactive docs available at:
# http://127.0.0.1:8000/docs            # Swagger UI
# http://127.0.0.1:8000/redoc           # ReDoc UI
# http://127.0.0.1:8000/openapi.json    # raw OpenAPI schema


# ##############################################################################
# PATH OPERATIONS (ROUTES)
# ##############################################################################

from fastapi import FastAPI

app = FastAPI()

@app.get("/")                            # GET request
def read_root():
    return {"message": "Hello, World!"}

@app.post("/items")                      # POST request
def create_item():
    return {"message": "item created"}

@app.put("/items/{item_id}")             # PUT request
def update_item(item_id: int):
    return {"item_id": item_id}

@app.patch("/items/{item_id}")           # PATCH request (partial update)
def partial_update(item_id: int):
    return {"item_id": item_id}

@app.delete("/items/{item_id}")          # DELETE request
def delete_item(item_id: int):
    return {"deleted": item_id}

# HTTP method decorators: get, post, put, patch, delete, head, options, trace


# ##############################################################################
# PATH PARAMETERS
# ##############################################################################

@app.get("/users/{user_id}")
def get_user(user_id: int):              # type hint validates & converts automatically
    return {"user_id": user_id}

@app.get("/files/{file_path:path}")      # :path allows slashes in the parameter
def get_file(file_path: str):
    return {"file_path": file_path}

# Order matters — fixed paths must come before parameterized ones
@app.get("/users/me")                    # must be defined BEFORE /users/{user_id}
def get_current_user():
    return {"user": "current user"}


# ##############################################################################
# QUERY PARAMETERS
# ##############################################################################

@app.get("/items")
def list_items(skip: int = 0, limit: int = 10):   # optional with defaults
    return {"skip": skip, "limit": limit}

@app.get("/search")
def search(q: str):                      # required (no default value)
    return {"query": q}

from typing import Optional

@app.get("/products")
def list_products(
    category: Optional[str] = None,      # optional, defaults to None
    in_stock: bool = True,               # booleans accepted as true/false/1/0/on/off/yes/no
    page: int = 1,
):
    return {"category": category, "in_stock": in_stock, "page": page}


# ##############################################################################
# REQUEST BODY (Pydantic Models)
# ##############################################################################

from pydantic import BaseModel
from typing import Optional

class Item(BaseModel):
    name: str                            # required field
    price: float                         # required field
    description: Optional[str] = None   # optional field
    in_stock: bool = True               # optional with default

@app.post("/items")
def create_item(item: Item):            # FastAPI reads body and validates with Pydantic
    return item

@app.put("/items/{item_id}")
def update_item(item_id: int, item: Item):   # path param + body together
    return {"item_id": item_id, **item.dict()}


# ##############################################################################
# PYDANTIC MODELS — VALIDATION & FIELDS
# ##############################################################################

from pydantic import BaseModel, Field, EmailStr
from typing import Optional, List

class UserCreate(BaseModel):
    username: str = Field(..., min_length=3, max_length=50)  # ... means required
    email: EmailStr                                           # requires email-validator
    age: int = Field(..., gt=0, lt=130)                      # greater than 0, less than 130
    tags: List[str] = []

class UserResponse(BaseModel):
    id: int
    username: str
    email: str

    class Config:
        from_attributes = True          # allows creating model from ORM objects (SQLAlchemy etc.)

# Nested models
class Address(BaseModel):
    street: str
    city: str
    country: str = "NL"

class UserWithAddress(BaseModel):
    name: str
    address: Address                    # nested Pydantic model


# ##############################################################################
# RESPONSE MODEL
# ##############################################################################

from pydantic import BaseModel

class ItemOut(BaseModel):
    name: str
    price: float

@app.post("/items", response_model=ItemOut)          # filters response to only ItemOut fields
def create_item(item: Item):
    return item

@app.get("/items", response_model=List[ItemOut])     # list of items
def get_items():
    return []

@app.get(
    "/items/{item_id}",
    response_model=ItemOut,
    response_model_exclude_unset=True,               # exclude fields not explicitly set
    status_code=200,                                 # default HTTP status code
)
def get_item(item_id: int):
    return {"name": "Foo", "price": 9.99}


# ##############################################################################
# STATUS CODES
# ##############################################################################

from fastapi import status

@app.post("/items", status_code=status.HTTP_201_CREATED)
def create_item():
    return {"message": "created"}

@app.delete("/items/{item_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_item(item_id: int):
    return None

# Common status codes:
# HTTP_200_OK, HTTP_201_CREATED, HTTP_204_NO_CONTENT
# HTTP_400_BAD_REQUEST, HTTP_401_UNAUTHORIZED, HTTP_403_FORBIDDEN
# HTTP_404_NOT_FOUND, HTTP_422_UNPROCESSABLE_ENTITY, HTTP_500_INTERNAL_SERVER_ERROR


# ##############################################################################
# RAISING HTTP EXCEPTIONS
# ##############################################################################

from fastapi import HTTPException, status

@app.get("/items/{item_id}")
def get_item(item_id: int):
    if item_id not in fake_db:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Item not found",
        )
    return fake_db[item_id]

# Custom exception handler
from fastapi import Request
from fastapi.responses import JSONResponse

class CustomError(Exception):
    def __init__(self, message: str):
        self.message = message

@app.exception_handler(CustomError)
async def custom_error_handler(request: Request, exc: CustomError):
    return JSONResponse(status_code=400, content={"error": exc.message})


# ##############################################################################
# HEADERS & COOKIES
# ##############################################################################

from fastapi import Header, Cookie, Response
from typing import Optional

@app.get("/headers")
def read_headers(user_agent: Optional[str] = Header(None)):   # header name auto-converted from snake_case
    return {"User-Agent": user_agent}

@app.get("/cookies")
def read_cookie(session_id: Optional[str] = Cookie(None)):
    return {"session_id": session_id}

@app.get("/set-cookie")
def set_cookie(response: Response):
    response.set_cookie(key="session_id", value="abc123", httponly=True)
    return {"message": "cookie set"}


# ##############################################################################
# FORM DATA & FILE UPLOADS
# ##############################################################################

# pip install python-multipart

from fastapi import Form, File, UploadFile

@app.post("/login")
def login(username: str = Form(...), password: str = Form(...)):
    return {"username": username}

@app.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    contents = await file.read()         # read file bytes
    return {
        "filename": file.filename,
        "content_type": file.content_type,
        "size": len(contents),
    }

@app.post("/upload-multiple")
async def upload_multiple(files: List[UploadFile] = File(...)):
    return [{"filename": f.filename} for f in files]


# ##############################################################################
# DEPENDENCY INJECTION
# ##############################################################################

from fastapi import Depends

# Simple dependency function
def get_query(q: Optional[str] = None):
    return q

@app.get("/search")
def search(query: str = Depends(get_query)):   # injects result of get_query
    return {"query": query}

# Shared pagination dependency
class Pagination:
    def __init__(self, skip: int = 0, limit: int = 10):
        self.skip = skip
        self.limit = limit

@app.get("/items")
def list_items(pagination: Pagination = Depends()):
    return {"skip": pagination.skip, "limit": pagination.limit}

# Database session dependency (common pattern)
def get_db():
    db = SessionLocal()                  # create DB session
    try:
        yield db                         # provide session to route
    finally:
        db.close()                       # always close after request

@app.get("/users")
def get_users(db = Depends(get_db)):
    return db.query(User).all()


# ##############################################################################
# SECURITY & AUTHENTICATION
# ##############################################################################

from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm, HTTPBearer
from fastapi import Depends, Security

# OAuth2 Bearer Token
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

@app.get("/me")
def get_current_user(token: str = Depends(oauth2_scheme)):
    # decode and validate token here
    return {"token": token}

# Login endpoint (returns token)
@app.post("/token")
def login(form_data: OAuth2PasswordRequestForm = Depends()):
    # validate form_data.username and form_data.password
    return {"access_token": "mytoken", "token_type": "bearer"}

# HTTP Basic Auth
from fastapi.security import HTTPBasic, HTTPBasicCredentials

security = HTTPBasic()

@app.get("/basic")
def basic_auth(credentials: HTTPBasicCredentials = Depends(security)):
    return {"username": credentials.username}


# ##############################################################################
# BACKGROUND TASKS
# ##############################################################################

from fastapi import BackgroundTasks

def send_email(email: str, message: str):    # runs after response is sent
    print(f"Sending email to {email}: {message}")

@app.post("/notify")
def notify(background_tasks: BackgroundTasks, email: str):
    background_tasks.add_task(send_email, email, "You have a notification")
    return {"message": "notification queued"}


# ##############################################################################
# MIDDLEWARE
# ##############################################################################

from fastapi.middleware.cors import CORSMiddleware
from fastapi.middleware.gzip import GZipMiddleware
import time

# CORS middleware — allow cross-origin requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://example.com", "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],                 # allow all HTTP methods
    allow_headers=["*"],                 # allow all headers
)

# GZip compression
app.add_middleware(GZipMiddleware, minimum_size=1000)

# Custom middleware
from starlette.middleware.base import BaseHTTPMiddleware
from starlette.requests import Request

class TimingMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request: Request, call_next):
        start = time.time()
        response = await call_next(request)
        duration = time.time() - start
        response.headers["X-Process-Time"] = str(duration)
        return response

app.add_middleware(TimingMiddleware)


# ##############################################################################
# ROUTERS (splitting routes into multiple files)
# ##############################################################################

from fastapi import APIRouter

# In users.py
router = APIRouter(
    prefix="/users",                     # all routes get this prefix
    tags=["users"],                      # groups routes in docs
    responses={404: {"description": "Not found"}},
)

@router.get("/")
def list_users():
    return []

@router.get("/{user_id}")
def get_user(user_id: int):
    return {"user_id": user_id}

# In main.py
from .routers import users
app.include_router(users.router)
app.include_router(items.router, prefix="/v1")   # add version prefix


# ##############################################################################
# LIFESPAN EVENTS (startup / shutdown)
# ##############################################################################

from contextlib import asynccontextmanager

@asynccontextmanager
async def lifespan(app: FastAPI):
    # startup: runs before the app starts receiving requests
    print("Starting up...")
    yield
    # shutdown: runs when the app is shutting down
    print("Shutting down...")

app = FastAPI(lifespan=lifespan)


# ##############################################################################
# ASYNC SUPPORT
# ##############################################################################

import asyncio
import httpx

@app.get("/async-example")
async def async_route():                 # use async def for I/O-bound operations
    async with httpx.AsyncClient() as client:
        response = await client.get("https://api.example.com/data")
    return response.json()

# Use def (not async def) for CPU-bound tasks — FastAPI runs them in a thread pool
@app.get("/sync-example")
def sync_route():
    return {"message": "sync is fine for CPU tasks"}


# ##############################################################################
# CUSTOM RESPONSES
# ##############################################################################

from fastapi.responses import (
    JSONResponse,       # default — returns JSON
    HTMLResponse,       # returns HTML
    PlainTextResponse,  # returns plain text
    RedirectResponse,   # HTTP redirect
    StreamingResponse,  # stream large responses
    FileResponse,       # serve a file from disk
)

@app.get("/html", response_class=HTMLResponse)
def get_html():
    return "<h1>Hello</h1>"

@app.get("/redirect")
def redirect():
    return RedirectResponse(url="/new-url", status_code=301)

@app.get("/download")
def download():
    return FileResponse("report.pdf", media_type="application/pdf", filename="report.pdf")

@app.get("/stream")
def stream():
    def generate():
        for i in range(10):
            yield f"chunk {i}\n"
    return StreamingResponse(generate(), media_type="text/plain")


# ##############################################################################
# TESTING
# ##############################################################################

# pip install httpx pytest

from fastapi.testclient import TestClient

client = TestClient(app)

def test_read_root():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"message": "Hello, World!"}

def test_create_item():
    response = client.post("/items", json={"name": "Foo", "price": 9.99})
    assert response.status_code == 201

# Run tests: pytest test_main.py -v


# ##############################################################################
# USEFUL TIPS
# ##############################################################################

# Use `response_model` to hide internal fields (e.g. passwords) from responses
# Use `Depends()` for shared logic like auth, DB sessions, and pagination
# Prefer `async def` for routes that do I/O (DB, HTTP calls, file reads)
# Use `APIRouter` to keep routes organized across multiple files
# FastAPI validates all input automatically — no manual validation needed
# Set `debug=True` in FastAPI() only for development, never in production
# Use environment variables for secrets — never hardcode them
