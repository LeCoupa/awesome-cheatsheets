/* *******************************************************************************************
 * PUPPETEER
 * https://pptr.dev/
 * ******************************************************************************************* */


// When you install Puppeteer, it downloads a recent version of Chromium (~170MB Mac, ~282MB Linux, ~280MB Win)
// that is guaranteed to work with the API. 
npm install puppeteer

// A lightweight version of Puppeteer for launching an existing browser installation or for connecting to a remote one.
// Be sure that the version of puppeteer-core you install is compatible with the browser you intend to connect to.
// More about the difference between puppeteer vs puppeteer-core
// https://pptr.dev/#?product=Puppeteer&version=v2.1.1&show=api-puppeteer-vs-puppeteer-core
npm install puppeteer-core


/* *******************************************************************************************
 * ENVIRONMENT VARIABLES
 * ******************************************************************************************* */

HTTP_PROXY  // Defines HTTP proxy settings that are used to download and run Chromium.
HTTPS_PROXY // Defines HTTP proxy settings that are used to download and run Chromium.
NO_PROXY    // Defines HTTP proxy settings that are used to download and run Chromium.

PUPPETEER_SKIP_CHROMIUM_DOWNLOAD // Do not download bundled Chromium during installation step.
PUPPETEER_DOWNLOAD_HOST          // Overwrite URL prefix that is used to download Chromium. Note: this includes protocol and might even include path prefix. Defaults to https://storage.googleapis.com.
PUPPETEER_CHROMIUM_REVISION      // Specify a certain version of Chromium you'd like Puppeteer to use. See puppeteer.launch([options]) on how executable path is inferred. BEWARE: Puppeteer is only guaranteed to work with the bundled Chromium, use at your own risk.
PUPPETEER_EXECUTABLE_PATH        // Specify an executable path to be used in puppeteer.launch. See puppeteer.launch([options]) on how the executable path is inferred. BEWARE: Puppeteer is only guaranteed to work with the bundled Chromium, use at your own risk.
PUPPETEER_PRODUCT                // Specify which browser you'd like Puppeteer to use. Must be one of chrome or firefox. Setting product programmatically in puppeteer.launch([options]) supercedes this environment variable. The product is exposed in puppeteer.product

/* *******************************************************************************************
 * API
 * ******************************************************************************************* */


// PUPPETEER
// -----
// Puppeteer module provides a method to launch a Chromium instance. 
// https://pptr.dev/#?product=Puppeteer&version=v2.1.1&show=api-class-puppeteer

const puppeteer = require('puppeteer');

puppeteer.devices; // Returns a list of devices to be used with page.emulate(options)
puppeteer.errors;  // Returns the specific error classes
puppeteer.product; // Returns the name of the browser that is under automation ("chrome" or "firefox")

puppeteer.connect(options);                // Attaches Puppeteer to an existing Chromium instance.
puppeteer.createBrowserFetcher([options]); // Create a brower fetcher instance
puppeteer.defaultArgs([options]);          // The default flags that Chromium will be launched with.
puppeteer.executablePath();                // Returns a path where Puppeteer expects to find bundled Chromium.
puppeteer.launch([options]);               // Launch a browser instance

// BROWSER FETCHER
// -----
// BrowserFetcher can download and manage different versions of Chromium.
// https://pptr.dev/#?product=Puppeteer&version=v2.1.1&show=api-class-browserfetcher

const browserFetcher = puppeteer.createBrowserFetcher();

browserFetcher.canDownload(revision)                  // Initiates a HEAD request to check if the revision is available.
browserFetcher.download(revision[, progressCallback]) // Initiates a GET request to download the revision from the host.
browserFetcher.localRevisions()                       // Returns a list of all revisions available locally on disk.
browserFetcher.platform()                             // Returns one of mac, linux, win32 or win64.
browserFetcher.remove(revision)                       // Resolves when the revision has been removed.
browserFetcher.revisionInfo(revision)                 // Returns all the information on the revision.

// BROWSER
// -----
// A Browser is created when Puppeteer connects to a Chromium instance, either through puppeteer.launch or puppeteer.connect.
// https://pptr.dev/#?product=Puppeteer&version=v2.1.1&show=api-class-browser

const browser = await puppeteer.launch();

browser.on('disconnected')    // Emitted when Puppeteer gets disconnected from the Chromium instance.
browser.on('targetchanged')   // Emitted when the url of a target changes.
browser.on('targetcreated')   // Emitted when a target is created, for example when a new page is opened by window.open or browser.newPage.
browser.on('targetdestroyed') // Emitted when a target is destroyed, for example when a page is closed.

browser.browserContexts()                   // Returns an array of all open browser contexts.
browser.close()                             // Closes Chromium and all of its pages (if any were opened).
browser.createIncognitoBrowserContext()     // Creates a new incognito browser context.
browser.defaultBrowserContext()             // Returns the default browser context.
browser.disconnect()                        // Disconnects Puppeteer from the browser, but leaves the Chromium process running.
browser.isConnected()                       // Indicates that the browser is connected.
browser.newPage()                           // Promise which resolves to a new Page object.
browser.pages()                             // An array of all pages inside the Browser.
browser.process()                           // Returns Spawned browser process.
browser.target()                            // A target associated with the browser.
browser.targets()                           // An array of all active targets inside the Browser.
browser.userAgent()                         // Promise which resolves to the browser's original user agent.
browser.version()                           // Returns the browser version (e.g. Chrome/61.0.3153.0)
browser.waitForTarget(predicate[, options]) // Promise which resolves to the first target found that matches the predicate function.
browser.wsEndpoint()                        // Returns the browser websocket url.

// BROWSER CONTEXT
// -----
// BrowserContexts provide a way to operate multiple independent browser sessions
// https://pptr.dev/#?product=Puppeteer&version=v2.1.1&show=api-class-browsercontext

const context = await browser.createIncognitoBrowserContext();

browserContext.on('targetchanged')   // Emitted when the url of a target inside the browser context changes.
browserContext.on('targetcreated')   // Emitted when a new target is created inside the browser context.
browserContext.on('targetdestroyed') // Emitted when a target inside the browser context is destroyed, for example when a page is closed.

browserContext.browser()                                // The browser this browser context belongs to.
browserContext.clearPermissionOverrides()               // Clears all permission overrides for the browser context.
browserContext.close()                                  // Closes the browser context. All the targets that belong to the browser context will be closed.
browserContext.isIncognito()                            // Returns whether BrowserContext is incognito.
browserContext.newPage()                                // Creates a new page in the browser context.
browserContext.overridePermissions(origin, permissions) // Overrides permissions to grant.
browserContext.pages()                                  // An array of all pages inside the browser context.
browserContext.targets()                                // An array of all active targets inside the browser context.
browserContext.waitForTarget(predicate[, options])      // Promise which resolves to the first target found that matches the predicate function.

// PAGE
// -----
// Page provides methods to interact with a single tab or extension background page in Chromium.
// One Browser instance might have multiple Page instances.
// https://pptr.dev/#?product=Puppeteer&version=v2.1.1&show=api-class-page

const page = await browser.newPage();

page.on('close')            // Emitted when the page closes.
page.on('console')          // Emitted when JavaScript within the page calls one of console API methods.
page.on('dialog')           // Emitted when a JavaScript dialog appears, such as alert, prompt, confirm or beforeunload.
page.on('domcontentloaded') // Emitted when the JavaScript DOMContentLoaded event is dispatched.
page.on('error')            // Emitted when the page crashes.
page.on('frameattached')    // Emitted when a frame is attached.
page.on('framedetached')    // Emitted when a frame is detached.
page.on('framenavigated')   // Emitted when a frame is navigated to a new url.
page.on('load')             // Emitted when the JavaScript load event is dispatched.
page.on('metrics')          // Emitted when the JavaScript code makes a call to console.timeStamp. 
page.on('pageerror')        // Emitted when an uncaught exception happens within the page.
page.on('popup')            // Emitted when the page opens a new tab or window.
page.on('request')          // Emitted when a page issues a request.
page.on('requestfailed')    // Emitted when a request fails, for example by timing out.
page.on('requestfinished')  // Emitted when a request finishes successfully.
page.on('response')         // Emitted when a response is received.
page.on('workercreated')    // Emitted when a dedicated WebWorker is spawned by the page.
page.on('workerdestroyed')  // Emitted when a dedicated WebWorker is terminated.

page.accessibility // returns Accessibility
page.coverage      // returns Coverage
page.keyboard      // returns Keyboard
page.mouse         // returns Mouse
page.touchscreen   // returns Touchscreen
page.tracing       // returns Tracing

page.$(selector)                                                // The method runs document.querySelector within the page. If no element matches the selector, the return value resolves to null.
page.$$(selector)                                               // The method runs document.querySelectorAll within the page. If no elements match the selector, the return value resolves to [].
page.$$eval(selector, pageFunction[, ...args])                  // This method runs Array.from(document.querySelectorAll(selector)) within the page and passes it as the first argument to pageFunction.
page.$eval(selector, pageFunction[, ...args])                   // This method runs document.querySelector within the page and passes it as the first argument to pageFunction. If there's no element matching selector, the method throws an error.
page.$x(expression)                                             // The method evaluates the XPath expression.
page.addScriptTag(options)                                      // Adds a <script> tag into the page with the desired url or content.
page.addStyleTag(options)                                       // Adds a <link rel="stylesheet"> tag into the page with the desired url or a <style type="text/css"> tag with the content.
page.authenticate(credentials)                                  // Provide credentials for HTTP authentication.
page.bringToFront()                                             // Brings page to front (activates tab).
page.browser()                                                  // Get the browser the page belongs to.
page.browserContext()                                           // Get the browser context that the page belongs to.
page.click(selector[, options])                                 // This method fetches an element with selector, scrolls it into view if needed, and then uses page.mouse to click in the center of the element. If there's no element matching selector, the method throws an error.
page.close([options])                                           // Close the page
page.content()                                                  // Gets the full HTML contents of the page, including the doctype.
page.cookies([...urls])                                         // If no URLs are specified, this method returns cookies for the current page URL. If URLs are specified, only cookies for those URLs are returned.
page.deleteCookie(...cookies)                                   // Delete a cookie
page.emulate(options)                                           // Emulates given device metrics and user agent.
page.emulateMediaFeatures(features)                             // Emulates CSS media features on the page.
page.emulateMediaType(type)                                     // Changes the CSS media type of the page.
page.emulateTimezone(timezoneId)                                // Changes the timezone of the page.
page.evaluate(pageFunction[, ...args])                          // Evaluate the page.
page.evaluateHandle(pageFunction[, ...args])                    // Evaluate the page and return returns in-page object (JSHandle).
page.evaluateOnNewDocument(pageFunction[, ...args])             // Adds a function which would be invoked whenever the page is navigated or whenever the child frame is attached or navigated.
page.exposeFunction(name, puppeteerFunction)                    // Adds a function called name on the page's window object.
page.focus(selector)                                            // Fetches an element with selector and focuses it. If there's no element matching selector, the method throws an error.
page.frames()                                                   // Returns an array of all frames attached to the page.
page.goBack([options])                                          // Navigate to the previous page in history.
page.goForward([options])                                       // Navigate to the next page in history.
page.goto(url[, options])                                       // Promise which resolves to the main resource response. In case of multiple redirects, the navigation will resolve with the response of the last redirect.
page.hover(selector)                                            // Fetches an element with selector, scrolls it into view if needed, and then uses page.mouse to hover over the center of the element.
page.isClosed()                                                 // Indicates that the page has been closed.
page.mainFrame()                                                // Returns the page's main frame.
page.metrics()                                                  // Returns an object containing the page metrics.
page.pdf([options])                                             // Generates a pdf of the page with print css media.
page.queryObjects(prototypeHandle)                              // Iterates the JavaScript heap and finds all the objects with the given prototype.
page.reload([options])                                          // Reloads the page.
page.screenshot([options])                                      // Takes a screenshot.
page.select(selector, ...values)                                // Triggers a change and input event once all the provided options have been selected. If there's no <select> element matching selector, the method throws an error.
page.setBypassCSP(enabled)                                      // Toggles bypassing page's Content-Security-Policy.
page.setCacheEnabled([enabled])                                 // Toggles ignoring cache for each request based on the enabled state. By default, caching is enabled.
page.setContent(html[, options])                                // Asssigns HTML markup to the page.
page.setCookie(...cookies)                                      // Sets a cookie.
page.setDefaultNavigationTimeout(timeout)                       // Changes the default maximum navigation timeout (see docs for the concerned methods).
page.setDefaultTimeout(timeout)                                 // Changes the default maximum navigation timeout (for all methods).
page.setExtraHTTPHeaders(headers)                               // Sets extra HTTP headers to be sent with every request the page initiates.
page.setGeolocation(options)                                    // Sets the page's geolocation.
page.setJavaScriptEnabled(enabled)                              // Whether or not to enable JavaScript on the page.
page.setOfflineMode(enabled)                                    // When true, enables offline mode for the page.
page.setRequestInterception(value)                              // Whether to enable request interception.
page.setUserAgent(userAgent)                                    // Sets the specific user agent to use in this page.
page.setViewport(viewport)                                      // Sets the viewport.
page.tap(selector)                                              // This method fetches an element with selector, scrolls it into view if needed, and then uses page.touchscreen to tap in the center of the element. If there's no element matching selector, the method throws an error.
page.target()                                                   // Returns a target this page was created from.
page.title()                                                    // Returns the page title.
page.type(selector, text[, options])                            // Sends a keydown, keypress/input, and keyup event for each character in the text.
page.url()                                                      // This is a shortcut for page.mainFrame().url()
page.viewport()                                                 // Returns the viewport information.
page.waitFor(selectorOrFunctionOrTimeout[, options[, ...args]]) // Wait for the element to appear.
page.waitForFileChooser([options])                              // Wait for the file chooser.
page.waitForFunction(pageFunction[, options[, ...args]])        // Wait for the function.
page.waitForNavigation([options])                               // Wait for navigation.
page.waitForRequest(urlOrPredicate[, options])                  // Wait for the request.
page.waitForResponse(urlOrPredicate[, options])                 // Wait for the response.
page.waitForSelector(selector[, options])                       // Wait for the selector.
page.waitForXPath(xpath[, options])                             // Wait for the XPath selector.
page.workers()                                                  // Returns all of the dedicated WebWorkers associated with the page.

// WORKER
// -----
// The Worker class represents a WebWorker.
// The events workercreated and workerdestroyed are emitted on the page object to signal the worker lifecycle.
// https://pptr.dev/#?product=Puppeteer&version=v2.1.1&show=api-class-worker

worker.evaluate(pageFunction[, ...args])       // Evaluate a function in the worker context.
worker.evaluateHandle(pageFunction[, ...args]) // Evaluate a function in the worker context and returns in-page object (JSHandle).
worker.executionContext()                      // Returns ExecutionContext.
worker.url()                                   // Returns worker url.

// ACCESSIBILITY
// -----
// The Accessibility class provides methods for inspecting Chromium's accessibility tree.
// The accessibility tree is used by assistive technology such as screen readers or switches.
// https://pptr.dev/#?product=Puppeteer&version=v2.1.1&show=api-class-accessibility

accessibility.snapshot([options]) // Captures the current state of the accessibility tree. The returned object represents the root accessible node of the page.

// KEYBOARD
// -----
// Keyboard provides an api for managing a virtual keyboard. 
// https://pptr.dev/#?product=Puppeteer&version=v2.1.1&show=api-class-keyboard

keyboard.down(key[, options])  // Dispatches a keydown event.
keyboard.press(key[, options]) // Shortcut for keyboard.down and keyboard.up.
keyboard.sendCharacter(char)   // Dispatches a keypress and input event. This does not send a keydown or keyup event.
keyboard.type(text[, options]) // Sends a keydown, keypress/input, and keyup event for each character in the text.
keyboard.up(key)               // Dispatches a keyup event.

// MOUSE
// -----
// The Mouse class operates in main-frame CSS pixels relative to the top-left corner of the viewport.
// https://pptr.dev/#?product=Puppeteer&version=v2.1.1&show=api-class-mouse

mouse.click(x, y[, options]) // Shortcut for mouse.move, mouse.down and mouse.up.
mouse.down([options])        // Dispatches a mousedown event.
mouse.move(x, y[, options])  // Dispatches a mousemove event.
mouse.up([options])          // Dispatches a mouseup event.

// TOUCHSCREEN
// -----
// https://pptr.dev/#?product=Puppeteer&version=v2.1.1&show=api-class-touchscreen

touchscreen.tap(x, y) // Dispatches a touchstart and touchend event.

// TRACING
// -----
// https://pptr.dev/#?product=Puppeteer&version=v2.1.1&show=api-class-tracing

tracing.start([options]) // Start trace.
tracing.stop()           // Stop trace.

// FILE CHOOSER
// -----
// FileChooser objects are returned via the 'page.waitForFileChooser' method.
// File choosers let you react to the page requesting for a file.
// https://pptr.dev/#?product=Puppeteer&version=v2.1.1&show=api-class-filechooser

fileChooser.accept(filePaths) // Accept the file chooser request with given paths.
fileChooser.cancel()          // Closes the file chooser without selecting any files.
fileChooser.isMultiple()      // Returns whether file chooser allow for multiple file selection.

// DIALOG
// -----
// Dialog objects are dispatched by page via the 'dialog' event.
// https://pptr.dev/#?product=Puppeteer&version=v2.1.1&show=api-class-dialog

dialog.accept([promptText]) // Resolves when the dialog has been accepted.
dialog.defaultValue()       // If dialog is prompt, returns default prompt value. Otherwise, returns empty string.
dialog.dismiss()            // Resolves when the dialog has been dismissed.
dialog.message()            // Returns a message displayed in the dialog.
dialog.type()               // Returns dialog's type, can be one of: alert, beforeunload, confirm or prompt.

// CONSOLE MESSAGE
// -----
// ConsoleMessage objects are dispatched by page via the 'console' event.
// https://pptr.dev/#?product=Puppeteer&version=v2.1.1&show=api-class-consolemessage

consoleMessage.args()     // Returns JSHandle.
consoleMessage.location() // Returns location.
consoleMessage.text()     // Returns message text.
consoleMessage.type()     // Returns message type.

// FRAME
// -----
// At every point of time, page exposes its current frame tree via the page.mainFrame() and frame.childFrames() methods.
// https://pptr.dev/#?product=Puppeteer&version=v2.1.1&show=api-class-frame

frame.$(selector)                                                // The method queries frame for the selector. If there's no such element within the frame, the method will resolve to null.
frame.$$(selector)                                               // The method runs document.querySelectorAll within the frame. If no elements match the selector, the return value resolves to [].
frame.$$eval(selector, pageFunction[, ...args])                  // This method runs Array.from(document.querySelectorAll(selector)) within the frame and passes it as the first argument to pageFunction.
frame.$eval(selector, pageFunction[, ...args])                   // This method runs document.querySelector within the frame and passes it as the first argument to pageFunction. If there's no element matching selector, the method throws an error.
frame.$x(expression)                                             // The method evaluates the XPath expression.
frame.addScriptTag(options)                                      // Adds a <script> tag into the page with the desired url or content.
frame.addStyleTag(options)                                       // Adds a <link rel="stylesheet"> tag into the page with the desired url or a <style type="text/css"> tag with the content.
frame.childFrames()                                              // Returns all child frames.
frame.click(selector[, options])                                 // This method fetches an element with selector, scrolls it into view if needed, and then uses page.mouse to click in the center of the element. If there's no element matching selector, the method throws an error.
frame.content()                                                  // Gets the full HTML contents of the frame, including the doctype.
frame.evaluate(pageFunction[, ...args])                          // Evaluates function in the context of the frame.
frame.evaluateHandle(pageFunction[, ...args])                    // Evaluates function in the context of the frame and returns JSHandle.
frame.executionContext()                                         // Returns promise that resolves to the frame's default execution context.
frame.focus(selector)                                            // This method fetches an element with selector and focuses it. If there's no element matching selector, the method throws an error.
frame.goto(url[, options])                                       // Goes to url.
frame.hover(selector)                                            // This method fetches an element with selector, scrolls it into view if needed, and then uses page.mouse to hover over the center of the element. If there's no element matching selector, the method throws an error.
frame.isDetached()                                               // Returns true if the frame has been detached, or false otherwise.
frame.name()                                                     // Returns frame's name attribute as specified in the tag.
frame.parentFrame()                                              // Returns parent frame if any.
frame.select(selector, ...values)                                // Triggers a change and input event once all the provided options have been selected. If there's no <select> element matching selector, the method throws an error.
frame.setContent(html[, options])                                // Set content in iframe.
frame.tap(selector)                                              // This method fetches an element with selector, scrolls it into view if needed, and then uses page.touchscreen to tap in the center of the element. If there's no element matching selector, the method throws an error.
frame.title()                                                    // Returns the page's title.
frame.type(selector, text[, options])                            // Sends a keydown, keypress/input, and keyup event for each character in the text.
frame.url()                                                      // Returns frame's url.
frame.waitFor(selectorOrFunctionOrTimeout[, options[, ...args]]) // Wait for something.
frame.waitForFunction(pageFunction[, options[, ...args]])        // Wait for function.
frame.waitForNavigation([options])                               // Wait for navigation.
frame.waitForSelector(selector[, options])                       // Wait for selector.
frame.waitForXPath(xpath[, options])                             // Wait for XPath selector.

// EXECUTION CONTEXT
// -----
// The class represents a context for JavaScript execution.
// Besides pages, execution contexts can be found in workers.
// https://pptr.dev/#?product=Puppeteer&version=v2.1.1&show=api-class-executioncontext

executionContext.evaluate(pageFunction[, ...args])       // Evaluate function in execution context.
executionContext.evaluateHandle(pageFunction[, ...args]) // Evaluate function in execution context and returns JSHandle.
executionContext.frame()                                 // Returns frame associated with this execution context.
executionContext.queryObjects(prototypeHandle)           // The method iterates the JavaScript heap and finds all the objects with the given prototype.

// JSHANDLE
// -----
// JSHandle represents an in-page JavaScript object.
// JSHandles can be created with the page.evaluateHandle method.
// const windowHandle = await page.evaluateHandle(() => window);

jsHandle.asElement()                             // Returns either null or the object handle itself, if the object handle is an instance of ElementHandle.
jsHandle.dispose()                               // Resolves when the object handle is successfully disposed.
jsHandle.evaluate(pageFunction[, ...args])       // Evaluate function in the execution context the handle belongs to.
jsHandle.evaluateHandle(pageFunction[, ...args]) // Evaluate function in the execution context the handle belongs to and returns JS handle.
jsHandle.executionContext()                      // Returns execution context the handle belongs to.
jsHandle.getProperties()                         // Returns a map with property names as keys and JSHandle instances for the property values.
jsHandle.getProperty(propertyName)               // Fetches a single property from the referenced object.
jsHandle.jsonValue()                             // Returns a JSON representation of the object. If the object has a toJSON function, it will not be called.

// ELEMENTHANDLE
// -----
// ElementHandle represents an in-page DOM element.
// ElementHandles can be created with the page.$ method.
// const hrefElement = await page.$('a');

elementHandle.$(selector)                               // The method runs element.querySelector within the page. If no element matches the selector, the return value resolves to null.
elementHandle.$$(selector)                              // The method runs element.querySelectorAll within the page. If no elements match the selector, the return value resolves to [].
elementHandle.$$eval(selector, pageFunction[, ...args]) // This method runs document.querySelectorAll within the element and passes it as the first argument to pageFunction. If there's no element matching selector, the method throws an error.
elementHandle.$eval(selector, pageFunction[, ...args])  // This method runs document.querySelector within the element and passes it as the first argument to pageFunction. If there's no element matching selector, the method throws an error.
elementHandle.$x(expression)                            // The method evaluates the XPath expression relative to the elementHandle. If there are no such elements, the method will resolve to an empty array.
elementHandle.asElement()                               // Returns ElementHandle.
elementHandle.boundingBox()                             // Returns the bounding box of the element (relative to the main frame), or null if the element is not visible.
elementHandle.boxModel()                                // Returns boxes of the element, or null if the element is not visible.
elementHandle.click([options])                          // This method scrolls element into view if needed, and then uses page.mouse to click in the center of the element. If the element is detached from DOM, the method throws an error.
elementHandle.contentFrame()                            // Resolves to the content frame for element handles referencing iframe nodes, or null otherwise
elementHandle.dispose()                                 // Stops referencing the element handle. 
elementHandle.evaluate(pageFunction[, ...args])         // Evaluates function in the execution content the element handle belongs to.
elementHandle.evaluateHandle(pageFunction[, ...args])   // Evaluates function in the execution content the element handle belongs to and returns JS handle.
elementHandle.executionContext()                        // Returns execution context.
elementHandle.focus()                                   // Calls focus on the element.
elementHandle.getProperties()                           // The method returns a map with property names as keys and JSHandle instances for the property values.
elementHandle.getProperty(propertyName)                 // Fetches a single property from the objectHandle.s
elementHandle.hover()                                   // This method scrolls element into view if needed, and then uses page.mouse to hover over the center of the element. If the element is detached from DOM, the method throws an error.
elementHandle.isIntersectingViewport()                  // Resolves to true if the element is visible in the current viewport.
elementHandle.jsonValue()                               // Returns a JSON representation of the object.
elementHandle.press(key[, options])                     // Focuses the element, and then uses keyboard.down and keyboard.up.
elementHandle.screenshot([options])                     // This method scrolls element into view if needed, and then uses page.screenshot to take a screenshot of the element.
elementHandle.select(...values)                         // Triggers a change and input event once all the provided options have been selected. If there's no <select> element matching selector, the method throws an error.
elementHandle.tap()                                     // This method scrolls element into view if needed, and then uses touchscreen.tap to tap in the center of the element. If the element is detached from DOM, the method throws an error.
elementHandle.toString()                                // Returns string.
elementHandle.type(text[, options])                     // Focuses the element, and then sends a keydown, keypress/input, and keyup event for each character in the text.
elementHandle.uploadFile(...filePaths)                  // Uploads file.

// REQUEST
// -----
// Represents a request which are sent by a page.
// https://pptr.dev/#?product=Puppeteer&version=v2.1.1&show=api-class-request

request.abort([errorCode])    // Aborts request.
request.continue([overrides]) // Continues request with optional request overrides.
request.failure()             // The method returns null unless this request was failed, as reported by requestfailed event.
request.frame()               // Returns the Frame that initiated this request, or null if navigating to error pages.
request.headers()             // Returns an object with HTTP headers associated with the request. All header names are lower-case.
request.isNavigationRequest() // Whether this request is driving frame's navigation.
request.method()              // Returns Request's method (GET, POST, etc.)
request.postData()            // Returns Request's post body, if any.
request.redirectChain()       // Returns the redirect chain.
request.resourceType()        // Returns the request's resource type as it was perceived by the rendering engine. 
request.respond(response)     // Fulfills request with given response.
request.response()            // Returns a matching Response object, or null if the response has not been received yet.
request.url()                 // Returns URL of the request.

// RESPONSE
// -----
// Response class represents responses which are received by page.
// https://pptr.dev/#?product=Puppeteer&version=v2.1.1&show=api-class-response

response.buffer()            // 
response.frame()             // 
response.fromCache()         // 
response.fromServiceWorker() // 
response.headers()           // 
response.json()              // 
response.ok()                // 
response.remoteAddress()     // 
response.request()           // 
response.securityDetails()   // 
response.status()            // 
response.statusText()        // 
response.text()              // 
response.url()               // 

// SECURITY DETAILS
// -----
// SecurityDetails class represents the security details when response was received over the secure connection.
// https://pptr.dev/#?product=Puppeteer&version=v2.1.1&show=api-class-securitydetails

securityDetails.issuer()      // 
securityDetails.protocol()    // 
securityDetails.subjectName() // 
securityDetails.validFrom()   // 
securityDetails.validTo()     // 

// TARGET
// -----
// https://pptr.dev/#?product=Puppeteer&version=v2.1.1&show=api-class-target

target.browser()          // 
target.browserContext()   // 
target.createCDPSession() // 
target.opener()           // 
target.page()             // 
target.type()             // 
target.url()              // 
target.worker()           // 

// CDPSESSION
// -----
// The CDPSession instances are used to talk raw Chrome Devtools Protocol
// https://pptr.dev/#?product=Puppeteer&version=v2.1.1&show=api-class-cdpsession

cdpSession.detach()               // 
cdpSession.send(method[, params]) // 

// COVERAGE
// -----
// Coverage gathers information about parts of JavaScript and CSS that were used by the page.
// https://pptr.dev/#?product=Puppeteer&version=v2.1.1&show=api-class-coverage

coverage.startCSSCoverage([options]) // 
coverage.startJSCoverage([options])  // 
coverage.stopCSSCoverage()           // 
coverage.stopJSCoverage()            // 
