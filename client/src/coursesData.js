const coursesData = [
    {
      id: 1,
      title: 'Introduction to Algebra',
      description: 'Learn the basics of web development, including HTML, CSS, and JavaScript.',
      price: 29.99,
      instructor: 'John Doe',
      duration: '6 weeks',
      level: 'Beginner',
      ratings: 4.8,
      imageUrl: 'https://i.pinimg.com/564x/53/20/e5/5320e5ca33075c500591666e563eaab0.jpg'
    },
    {
      id: 2,
      title: 'Probabilties  In maths',
      description: 'Become a proficient Python developer with hands-on projects and exercises.',
      price: 49.99,
      instructor: 'Jane Smith',
      duration: '8 weeks',
      level: 'advanced',
      ratings: 4.6,
      imageUrl: 'https://i.pinimg.com/236x/a2/a1/d8/a2a1d8de2f0a67c282e557432845c524.jpg'
    },
    {
      id: 3,
      title: ' statistical Math Learning Fundamentals',
      description: 'Explore the world of machine learning and build predictive models.',
      price: 79.99,
      instructor: 'Mike Johnson',
      duration: '10 weeks',
      level: 'Advanced',
      ratings: 4.9,
      imageUrl: 'https://i.pinimg.com/236x/c8/ed/88/c8ed88d6e74ae4dd6047ac17d588abd0.jpg'
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