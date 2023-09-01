import React from "react"
import PostList from '../components/PostList';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <PostList />
    </Layout>
  )
}