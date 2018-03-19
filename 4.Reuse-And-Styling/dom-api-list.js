// DOM API

// Adding and Removing Elements:
Polymer.dom(parent).appendChild(node)
Polymer.dom(parent).insertBefore(node, beforeNode)
Polymer.dom(parent).removeChild(node)
Polymer.dom.flush()

// Parent and Child APIs
Polymer.dom(parent).childNodes
Polymer.dom(parent).children
Polymer.dom(node).parentNode
Polymer.dom(node).firstChild
Polymer.dom(node).lastChild
Polymer.dom(node).firstElementChild
Polymer.dom(node).lastElementChild
Polymer.dom(node).previousSibling
Polymer.dom(node).nextSibling
Polymer.dom(node).textContent
Polymer.dom(node).innerHTML

// Query Selector
Polymer.dom(parent).querySelector(selector)
Polymer.dom(parent).querySelectorAll(selector)

// Content APIs
Polymer.dom(contentElement).getDistributedNodes()
Polymer.dom(node).getDestinationInsertionPoints()

// Node Mutation API
Polymer.dom(node).setAttribute(attribute, value)
Polymer.dom(node).removeAttribute(attribute)
Polymer.dom(node).classList
