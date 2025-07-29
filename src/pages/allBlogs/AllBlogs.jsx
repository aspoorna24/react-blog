import React, { useContext } from 'react'
import myContext from '../../context/data/myContext';
import Layout from '../../components/layout/Layout';
import Blog from '../blog/Blog';

function AllBlogs() {
    const context = useContext(myContext);
    const { mode } = context;

    return (
        <Layout>
            <section className="text-gray-600 body-font">
                <Blog />
            </section >
        </Layout >
    )
}

export default AllBlogs