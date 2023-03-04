import localFont from 'next/font/local'

const euclidCircular = localFont({
    family: "Euclid Circular",
    style: "normal",
    src: [
      {
        path: '../public/asserts/fonts/euclid-circular/Euclid CircularA-Light.ttf',
        weight: '300',
        style: 'normal',
      },
      {
        path: '../public/asserts/fonts/euclid-circular/EuclidCircularA-Regular.ttf',
        weight: '400',
        style: 'normal',
      },
      {
        path: '../public/asserts/fonts/euclid-circular/Euclid CircularA-Medium.ttf',
        weight: '500',
        style: 'normal',
      },
      {
        path: '../public/asserts/fonts/euclid-circular/Euclid CircularA-SemiBold.ttf',
        weight: '600',
        style: 'normal',
      },
      {
        path: '../public/asserts/fonts/euclid-circular/Euclid Circular A Bold.ttf',
        weight: '700',
        style: 'normal',
      },
    ],
  });

export default euclidCircular;