# Gatsby Static Typescript Seed

A seed Gatsby project with the following additions setup and ready to roll. 

- Typescript
- tslint
- Prettier
- Styled components
- Jest
- Editor config
- Import aliases

### Usage
```
// Install dependecies
yarn 

// Development
yarn dev

// Unit Tests
yarn test --watch
```

### Import aliases

- @components => src/components/
- @pages => src/pages/
- @utils => src/utils/
- @styles => src/styles/

### Architecture / Design Choices
Code should be grouped by feature, so a page or components directory should contain most of what s needed to implement that page or component. Including (but not limited to)

- Implementation Files
- Tests
- Documentation

This seed ships with a few basic pages ready for you to start working withs

- Index
- About
- Contact
- Home
- Privacy

And two components
- BaseLayout
- MainNav

### Todo
- Travis
- Cypress
- Stylelint
- Storybook (Is this a good fit for this type of project?)
- Analytics & GDPR Compliance
- Contact Form with MailChimp