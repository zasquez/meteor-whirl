# meteor-whirl
Pure CSS loading animations with minimal effort for meteor

## Installation

```
$ meteor add yasaricli:whirl
```


#### Basic usage

That's it!

```html
  <div class="whirl duo">
    This content is taking ages to load.
  </div>
```

####Options
From using the demo you can work out which classes you need to add to your elements in order to show the loading animation you want.

By default, you will always need `whirl`.

Then there are;

* `traditional`
* `duo`
* `double-up`
* `sphere`
* `sphere-vertical`
* `bar`
* `bar-follow`
* `line`
* `line grow`
* `line back-and-forth`
* `shadow`
* `shadow oval`/`shadow oval left`
* `shadow oval right`
* `ringed`
* `blade`
* `helicopter`

There is also `no-overlay` which will hide the overlay which is added by default.

#### How does this work?
Not surprisingly it's real simple! :)

whirl makes use of CSS pseudo elements. It uses `:before` to provide an overlay effect if required and `:after` to show the animated spinner/bar etc.

making use of pseudo elements means that we can add whirl loading animations to any existing element on our page without being intrusive just by adding some classes as long as the elements pseudo elements aren't currently in use.

#### Contributing

Any suggestions, improvements or issues are welcome. :)

@jh3y

#### License

MIT

Copyright 2014 [@jh3y](https://github.com/jh3y)
