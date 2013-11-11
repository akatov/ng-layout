# Angular layout directive

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
