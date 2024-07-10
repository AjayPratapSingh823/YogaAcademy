import { useEffect, useState } from 'react';
import axios from 'axios';

const AllPrivateClasses = () => {
  const [Private, setPrivate] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPrivateClasses = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/get-class', {
          params: { category: 'Private Classes' },
        });
        setPrivate(response.data);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch Group classes');
      } finally {
        setLoading(false);
      }
    };
    fetchPrivateClasses();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className='m-3'>
      <a href="/private-classes" className='btn btn-dark'>Back</a>
      <h1 className='text-danger m-2 mb-3'>All Personal Classes</h1>
      {Private.length === 0 ? (
        <p>No Private classes available</p>
      ) : (
        <ul>
          {Private.map((kidClass) => (
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

export default AllPrivateClasses;
