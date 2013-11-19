# Angular layout directive
[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/akatov/ng-layout/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

## Usage

layout.html
```html
<table>
  <tr>
    <td>
      <yield content_for="left">
    </td>
    <td>
      <yield content_for="right">
    </td>
  </tr>
</table>
```

main.html
```html
<ng-layout src="layout.html">
  <div content_for="left">
    Hello
  </div>

  <div content_for="right">
    {{ name }}
  </div>
</ng-layout>
```
