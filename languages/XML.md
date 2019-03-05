> announcement: this doc is a quiz-, interview-oriented cheatsheet, which desigend for those who want to have an overview of XML, when preparing for interviews.

# What is XML
XML stands for eXtensible Markup Language, XML was designed to store and transport data. XML is often used for distributing data over the Internet(especial in web development).

# Then how can XML store data
XML uses a DTD to describe the data.

# The relation with HTML
* XML: is used to store or transport data.
   So the XML is a **Complement** to HTML.
* HTML: is used to format and display the same data.

   
XML does not carry any information about how to be displayed. The same XML data can be used in many different presentation scenarios.
Because of this, with XML, there is a full separation between data and presentation.

# What is XML Schema/DTD
The purpose of a DTD is to define the structure of an XML document. It defines the structure with a list of legal elements:


# When Not to Use a XML DTD/Sschema
XML does not require a DTD/Schema.

When you are experimenting with XML, or when you are working with small XML files, creating DTDs may be a waste of time.

If you develop applications, wait until the specification is stable before you add a document definition. Otherwise, your software might stop working because of validation errors.


# XML Syntax
The XML language has no predefined tags, but the syntax is rather logic and easy to learn. XML documents must contain one root element that is the parent of all other elements.

```
<bookstore>
  <book category="children">
    <title>Harry Potter</title>
    <author>J K. Rowling</author>
    <year>2005</year>
    <price>29.99</price>
  </book>
  <book category="web">
    <title>Learning XML</title>
    <author>Erik T. Ray</author>
    <year>2003</year>
    <price>39.95</price>
  </book>
</bookstore>
```

1. XML Tags are Case Sensitive
2. All XML Elements Must Have a Closeing Tag

```
<p>This is a paragraph.</p>
<br />  <!-- This is a self closing -->
```
3. XML Attribute Values Must Always be Quoted
4. Pay attention to the name rules.

# Reference
1. (W3School) [https://www.w3schools.com/xml/]
2. [cheat sheet in German](https://www.i-d-e.de/wp-content/uploads/2015/02/ide-xml-kurzreferenz.pdf)
