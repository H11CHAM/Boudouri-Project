const coursesData = [
    {
      id: 1,
      title: 'Introduction to Web Development',
      description: 'Learn the basics of web development, including HTML, CSS, and JavaScript.',
      price: 29.99,
      instructor: 'John Doe',
      duration: '6 weeks',
      level: 'Beginner',
      ratings: 4.8,
      imageUrl: 'https://example.com/images/course1.jpg'
    },
    {
      id: 2,
      title: 'Python Programming: From Zero to Hero',
      description: 'Become a proficient Python developer with hands-on projects and exercises.',
      price: 49.99,
      instructor: 'Jane Smith',
      duration: '8 weeks',
      level: 'Intermediate',
      ratings: 4.6,
      imageUrl: 'https://example.com/images/course2.jpg'
    },
    {
      id: 3,
      title: 'Machine Learning Fundamentals',
      description: 'Explore the world of machine learning and build predictive models.',
      price: 79.99,
      instructor: 'Mike Johnson',
      duration: '10 weeks',
      level: 'Advanced',
      ratings: 4.9,
      imageUrl: 'https://example.com/images/course3.jpg'
    },
    
  ];
  //fetching courses  info from the mongodb database db ! -->
  async function fetchingData() {
    try {
      const response = await fetch('http://localhost:3000/data', {
        method: 'GET',
      });
  
      if (response.ok) {
        const courses = await response.json();
        coursesData.push(courses);
      } else {
        console.log('Failed to fetch data:', response.status);
      }
    } catch (err) {
      console.error('Error fetching data:', err.message);
    }
  }
  
  
 
 export {coursesData}  ;