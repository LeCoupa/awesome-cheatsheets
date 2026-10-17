# PyTorch Cheatsheet

A quick reference for using PyTorch (https://pytorch.org), a popular deep learning framework.

## 📦 Importing PyTorch

```python
import torch
import torch.nn as nn
import torch.optim as optim
import torch.nn.functional as F
```

# Creating tensors

```python
x = torch.tensor([1.0, 2.0])
x = torch.zeros(2, 3)
x = torch.ones(2, 3)
x = torch.rand(2, 3)
```

# Tensor properties

```python
x.shape
x.dtype
x.device
```

# Tensor operations

```python
x + y
x @ y  # Matrix multiplication
x.sum()
x.view(6)  # Reshape
```

# Autograd (Automatic Differentiation)

```python
x = torch.tensor(2.0, requires_grad=True)
y = x ** 2
y.backward()
x.grad  # dy/dx = 2x
```

# Neural Network Modules

```python
class Net(nn.Module):
    def __init__(self):
        super(Net, self).__init__()
        self.fc1 = nn.Linear(10, 50)
        self.fc2 = nn.Linear(50, 1)

    def forward(self, x):
        x = F.relu(self.fc1(x))
        return self.fc2(x)

model = Net()
```

# Loss Functions

```python
loss_fn = nn.MSELoss()
loss = loss_fn(output, target)
```

# Optimizers

```python
optimizer = optim.SGD(model.parameters(), lr=0.01)
optimizer.zero_grad()
loss.backward()
optimizer.step()
```

# Dataset and DataLoader

```python
from torch.utils.data import Dataset, DataLoader

# Custom dataset
class MyDataset(Dataset):
    def __init__(self):
        self.data = ...

    def __len__(self):
        return len(self.data)

    def __getitem__(self, idx):
        return self.data[idx]

dataset = MyDataset()
loader = DataLoader(dataset, batch_size=32, shuffle=True)
```

# Model Evaluation

```python
model.eval()
with torch.no_grad():
    output = model(input)
```

# Save and Load Model

```python
# Save
torch.save(model.state_dict(), 'model.pth')

# Load
model.load_state_dict(torch.load('model.pth'))
model.eval()
```
