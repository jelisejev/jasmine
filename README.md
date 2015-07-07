# Jasmine cookbook

This is a collection of Jasmine recipes that can be used for testing different types of Javascript features, both for
vanilla Javascript and some of the frameworks.

## How to run

```sh
bower install
karma start karma.conf.js
```

## Examples

### Vanilla Javascript

- [Timeouts](examples/vanilla/TimeoutSpec.js)

### jQuery

- [Animations](examples/jquery/AnimationSpec.js)
- [Element dimensions](examples/jquery/DimensionSpec.js)
- [Element visibility](examples/jquery/VisibleSelectorSpec.js)
- Simulating events with jQuery.simulate()
 - [Key events](examples/jquery/KeyEventSpec.js)

### Bootstrap

- [Bootstrap components](examples/bootstrap/DropdownSpec.js)

### Angular

- [Controllers and views](examples/angular/ControllerViewSpec.js)
- [Timeout](examples/angular/TimeoutSpec.js)
- [Directives](examples/angular/DirectiveSpec.js)
- [Mocking service methods](examples/angular/MockServiceMethodSpec.js)
- [Mocking whole services](examples/angular/MockServiceSpec.js)
- [Ajax](examples/angular/HttpSpec.js)
- [Promises](examples/angular/PromiseSpec.js)

#### Weird cases

- [Clicking on a radio button](examples/angular/RadioButtonClickSpec.js)