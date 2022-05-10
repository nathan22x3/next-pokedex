import type { ImageProps } from 'next/image';
import NextImage from 'next/image';
import classNames from 'classnames';

const Image = ({ className, style, src, width, height, priority = true, draggable = false, ...rest }: ImageProps) => {
  return (
    <span
      className={classNames('image', className)}
      style={{ width: width || 'auto', height: height || 'auto', ...style }}
    >
      <NextImage
        {...{
          src,
          layout: 'fill',
          priority,
          onDragStart: draggable ? () => null : (event) => event.preventDefault(),
        }}
        {...rest}
      />
    </span>
  );
};

export default Image;
