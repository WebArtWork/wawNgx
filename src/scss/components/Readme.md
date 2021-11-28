

1. ==== button ====
```
<button class="btn _primary">Add</button>
<button class="btn _second">Cancel</button>
<button class="btn _danger">Delete</button>
```

2. ==== input ====
```
 <label class="forms">
	<span class="forms__title">Text</span>
	<input class="forms__input" type="text" name="text" placeholder="Your text">
</label>
```

3. ==== select ====
```
<label class="forms">
	<span class="forms__title">Name</span>
	<span class="forms__chevron material-icons">expand_more</span>
	<select class="forms__select">
		<option value="Default">Default</option>
	</select>
</label>
```

4. ==== textarea ====
```
<label class="forms">
	<span class="forms__title">Text</span>
	<textarea class="forms__textarea" placeholder="Text"></textarea>
</label>
```

5. ==== switch ====
```
<label class="switch">
	<div class="switch__toggle">
		<input class="switch__input" type="checkbox">
		<span class="switch__slider _round"></span>
	</div>
	<div class="switch__text">Sound notification</div>
</label>
```

6. ==== checkbox ====
```
<label class="checkbox">
	<input class="checkbox__input" type="checkbox" name="text">
	<div class="checkbox__body">
		<span class="checkbox__svg"><svg width="12px" height="10px"><use xlink:href="#check"></use></svg></span>
		<span class="checkbox__text">Text</span>
	</div>
</label>
```

<!-- Checkbox SVG Sprites - put one time on page-->
```
<svg class="checkbox__svg-icon">
    <symbol id="check" viewbox="0 0 12 10">
        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
    </symbol>
</svg>
```

7. ==== radio ====
```
<label class="radio">
	<input type="radio" name="text" class="radio__input">
	<span class="radio__label"></span>
	<div class="radio__text">Text</div>
</label>
```

8. ==== table ====
```
<div class="table-wrapp">
	<table class="table">
		<thead class="table-header">
			<tr class="table-header__tr">
				<th class="table__th">Clients</th>
				<th class="table__th">Address</th>
				<th class="table__th">Email</th>
				<th class="table__th">Phone</th>
				<th class="table__th">additional phone</th>
				<th class="table__th">Gender</th>
				<th class="table__th">Date of birth</th>
			</tr>
		</thead>
		<tbody class="table-body">
			<tr class="table-body__tr" *ngFor="let item of [{},{},{},{},{},{},{},{},{},{},{}]">
				<td class="table__td">Ivan Petrneko</td>
				<td class="table__td">Street of Blue Flowers 23</td>
				<td class="table__td">korsun_anna@gmail.com</td>
				<td class="table__td">(201) 555-0124</td>
				<td class="table__td">(201) 555-0124</td>
				<td class="table__td">Woman</td>
				<td class="table__td">2.05.1978</td>
			</tr>
		</tbody>
	</table>
</div>
```
