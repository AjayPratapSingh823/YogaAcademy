import { useEffect, useState } from 'react';
import axios from 'axios';

const AllKidsClasses = () => {
  const [kids, setKids] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchKidsClasses = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/get-class', {
          params: { category: 'Kids Classes' },
        });
        console.log(response.data);
        setKids(response.data);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch kids classes');
      } finally {
        setLoading(false);
      }
    };
    fetchKidsClasses();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className='m-3'>
      <a href="/kids-classes" className='btn btn-dark'>Back</a>
      <h1 className='text-danger m-2 mb-3'>All Kids Classes</h1>
      {kids.length === 0 ? (
        <p>No kids classes available</p>
      ) : (
        <ul>
          {kids.map((kidClass) => (
            <li key={kidClass.id}>
              <p>{kidClass.description}</p>
              <p><strong>Trainer:</strong> {kidClass.Trainer}</p>
              <p><strong>Type:</strong> {kidClass.category}</p>
              <p><strong>Date:</strong> {kidClass.date}</p>
              <p><strong>Fees:</strong> {kidClass.price}</p>
              <button className='btn btn-success'>Enroll in class</button>

            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AllKidsClasses;
