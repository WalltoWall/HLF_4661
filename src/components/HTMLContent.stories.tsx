import React from 'react'
import faker from 'faker'

import { HTMLContent } from './HTMLContent'

export default {
  title: 'Components/HTMLContent',
  component: HTMLContent,
}

const exampleHTML = `
  <h1>Heading 1</h1>
  <p>${faker.lorem.paragraph(1)}</p>
  <p>${faker.lorem.paragraph(1)}</p>
  <h2>Heading 2</h2>
  <p>${faker.lorem.paragraph()}</p>
  <ul>
    <li>${faker.lorem.sentence(3)}</li>
    <li>${faker.lorem.sentence(3)}</li>
    <li>${faker.lorem.sentence(3)}</li>
  </ul>
  <h3>Heading 3</h3>
  <p>${faker.lorem.paragraph()}</p>
  <ol>
    <li>${faker.lorem.sentence(3)}</li>
    <li>${faker.lorem.sentence(3)}</li>
    <li>${faker.lorem.sentence(3)}</li>
  </ol>
  <h4>Heading 4</h4>
  <p>${faker.lorem.paragraph()}</p>
  <p><a href="#">Link ${faker.lorem.words(3)}</a></p>
  <h5>Heading 5</h5>
  <p>${faker.lorem.paragraph()}</p>
  <h6>Heading 6</h6>
  <p>${faker.lorem.paragraph()} <strong>${faker.lorem.sentence()}</strong></p>
  <p>${faker.lorem.paragraph()} <code>${faker.hacker.verb()}</code> ${faker.lorem.words(
  3,
)}.</p>
`

export const Default = () => <HTMLContent html={exampleHTML} />
