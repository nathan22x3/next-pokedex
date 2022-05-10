import type { ImageProps } from 'next/image';
import NextImage from 'next/image';
import classNames from 'classnames';

const Image = ({
  className,
  style,
  src,
  width = 'auto',
  height = 'auto',
  layout = 'fill',
  priority = true,
  draggable = false,
  ...rest
}: ImageProps) => {
  return (
    <span className={classNames('image', className)} style={{ width, height, ...style }}>
      <NextImage
        {...{
          src,
          layout,
          priority,
          onDragStart: draggable ? () => null : (event) => event.preventDefault(),
        }}
        {...rest}
      />
    </span>
  );
};

export default Image;
