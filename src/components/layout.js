/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Styled } from 'theme-ui'

export default ({ children }) => {
  return (
    <div
      sx={{
        pt: [4, 5, 5],
        px: 3,
        m: 'auto',
        maxWidth: 'container'
      }}
    >
      <Styled.root>
        {children}
      </Styled.root>
    </div>
  )
}
