import { Card } from "../../util/cards";
import Cover from "../../public/asserts/images/cover.svg";

import '../../styles/landingPage/popular-course.css'

export default function PopularCourse() {
  const popularCourseList = [
    {
      courseId: 1,
      courseName: "PHP Beginner + Advanced",
      imageUrl: Cover,
      courseBy: "Ekalai Academy",
      shortDescription:
        "Learn the fundamentals of PHP, one of the most popular languages of modern web development.",
      price: 1290,
      liked: false,
      averageRating: 3.2,
      totalRating: 3272,
      addToCart: false,
    },
    {
      courseId: 2,
      courseName: "PHP Beginner + Advanced",
      imageUrl: Cover,
      courseBy: "Incrix Education",
      shortDescription:
        "Learn the fundamentals of PHP, one of the most popular languages of modern web development.",
      price: 1499,
      liked: true,
      averageRating: 4.7,
      totalRating: 25492,
      addToCart: false,
    },
    {
      courseId: 3,
      courseName: "PHP Beginner + Advanced",
      imageUrl: Cover,
      courseBy: "Ekalai Academy",
      shortDescription:
        "Learn the fundamentals of PHP, one of the most popular languages of modern web development.",
      price: 1789,
      liked: false,
      averageRating: 3.9,
      totalRating: 372,
      addToCart: false,
    },
    {
      courseId: 4,
      courseName: "PHP Beginner + Advanced",
      imageUrl: Cover,
      courseBy: "Incrix Education",
      shortDescription:
        "Learn the fundamentals of PHP, one of the most popular languages of modern web development.",
      price: 1499,
      liked: true,
      averageRating: 4.7,
      totalRating: 25492,
      addToCart: false,
    },
    {
      courseId: 5,
      courseName: "PHP Beginner + Advanced",
      imageUrl: Cover,
      courseBy: "Incrix Education",
      shortDescription:
        "Learn the fundamentals of PHP, one of the most popular languages of modern web development.",
      price: 1299,
      liked: true,
      averageRating: 4.7,
      totalRating: 125492,
      addToCart: false,
    },
  ];
  return (
    <div className="popular-course">
      <div className="title">
        <h2>Popular Course</h2>
      </div>
      <div className="popular-course-list">
        {popularCourseList.map((course, index) => (
          <Card key={index} course={course} />
        ))}
      </div>
    </div>
  );
}
