# Styling with Ease

Wall-to-Wall Gatsby projects have selected [`calico`][calico] as its preferred
CSS-in-JS solution because it:

- Enforces consistency with an explicit global `theme`.
- Enables developers to implement and respond design requirements quickly.
- Has great performance thanks to static extraction.
- Is 100% type-safe.
- Remove the difficulties and burden of CSS with its functional/atomic approach.

As a quick example, instead of needing to write something like this:

```css
.card {
  font-size: 16px;
  width: 100%;
  background-color: red;
}

.card--green {
  background-color: green;
}

@media screen and (min-width: 40em) {
  .card {
    font-size: 20px;
    width: 50%;
  }
}

@media screen and (min-width: 52em) {
  .card {
    font-size: 24px;
  }
}
```

```jsx
const Card = ({ isGreen }) => {
  return <div className={clsx('card', isGreen && 'card--green')} />
}
```

We can just write following:

```jsx
const Card = ({ isGreen }) => {
  return (
    <Box
      styles={{
        backgroundColor: isGreen ? 'red' : 'green',
        fontSize: [16, 20, 24],
        width: ['100%', '50%'],
      }}
    />
  )
}
```

With `calico`, component styles are achieved by applying pre-existing classes
via a syntax that is similar to "just writing CSS" — without writing a single
line of custom CSS.

Once you've actually built something this way, you'll quickly notice some real
benefits:

- **You aren't spending energy inventing class names.** No more adding silly
  names or styled-components like `.sidebar__inner-wrapper` or
  `<SidebarInnerWrapper />` just to style something, and no more agonizing over
  the perfect abstract name for something that's just a flex container.
- **Your CSS stops growing**. Using a traditional approach, your CSS files get
  bigger _every time_ you add a new feature. With atomic CSS, all of your styles
  are reusable so you rarely need to write new CSS.
- **Your CSS stays performant**. In a more traditional CSS-in-JS library,
  instead of paying in the cost of CSS size, you pay with the added runtime cost
  of every single component you style. While `calico` still has a runtime, it is
  much lighter than alternative libraries.
- **Making changes feels safe**. CSS is global and you can never know what
  you're breaking when making a change. Styles in your components are local, so
  you can change them without breaking something else.

For more information on using `calico` in a project, refer to its
[documentation][calico].

## Further Reading

Below are some curated posts and articles that explain the benefits of an atomic
based approach to styling:

- [By The Numbers: A Year and a Half with Atomic CSS](https://medium.com/@johnpolacek/by-the-numbers-a-year-and-half-with-atomic-css-39d75b1263b4)
- [Building a Scalable CSS Architecture](https://blog.algolia.com/redesigning-our-docs-part-4-building-a-scalable-css-architecture/)
- [CSS Utility Classes and "Separation of Concerns"](https://adamwathan.me/css-utility-classes-and-separation-of-concerns/)

[calico]: https://github.com/walltowall/calico
