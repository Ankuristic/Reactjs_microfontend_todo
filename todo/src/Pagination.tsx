import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Pagination: React.FC = () => {
    const [tableData, setTableData] = useState<string>('');

    useEffect(() => {
        axios.get('https://dummyjson.com/users')
            .then((response) => {
                console.log(response.data);
                setTableData(response.data); // Assuming you're handling the data as a string for simplicity
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []); // Empty dependency array to run the effect only once on mount

    return (
        <div>
            {/* Render the data here */}
            <pre>{JSON.stringify(tableData, null, 2)}</pre>
        </div>
    );
};

export default Pagination;

