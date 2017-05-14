import PropTypes from 'prop-types'
import { css } from 'glamor'
import cx from 'classnames'

export const propTypes = {
  clearfix: PropTypes.bool
}

const cssClearfix = css({
  '&:before, &:after': {
    display: 'table',
    clear: 'both',
    content: '""'
  }
}).toString()

export const parseProps = ({
  clearfix,
  className,
  ...props
}) => ({
  ...props
  className: cx(
    className,
    clearfix && cssClearfix
  )
})
