import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import SubjectList from './SubjectList'

it('should render the subject list', async () => {
  const { container } = render(
    <MemoryRouter>
      <SubjectList />
    </MemoryRouter>
  )

  expect(container).toMatchSnapshot()
})
