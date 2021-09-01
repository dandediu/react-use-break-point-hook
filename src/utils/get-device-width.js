const getDeviceWidth = (width) => {
  if(width < 320) {
    return 'xs'
  } else if(width >= 320 && width < 576 )  {
    return 'sm'
  } else if(width >= 576 && width < 768 ) {
    return 'md'
  } else if(width >= 768 && width < 992) {
    return 'lg'
  } else if(width >= 992 && width < 1200) {
    return 'xl'
  } else if(width >= 1200) {
    return 'xxl'
  }
}

export default getDeviceWidth;