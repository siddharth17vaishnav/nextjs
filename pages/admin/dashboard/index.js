import React from 'react';

export async function getServerSideProps() {
  const api = await fetch('http://localhost:3000/api/get');
  const response = await api.json();
  return {
    props: { res: response },
  };
}

const index = (props) => {
  console.log(props);
  return (
    <div>
      <h1 className="text-2xl mx-auto">Contact Lists</h1>
      <div>
        {props.res.length === 0 ? (
          'nothing here'
        ) : (
          <>
            {props?.res?.map((item) => {
              return (
                <>
                  <div>
                    <p>{item.email}</p>
                    <p>{item.isCompleted}</p>
                  </div>
                </>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default index;
