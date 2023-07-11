"use client"

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Profile from '@components/Profile'

const MyProfile = () => {
    const { data: session } = useSession()

    const fetchPosts = async () => {
        const res = await fetch(`/api/users/${session?.user.id}/posts`)
        const data = await res.json()
        setPosts(data)
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    const handleEdit = () => {

    }

    const handleDelete = async () => {

    }

    return (
        <Profile
            name="My"
            desc="Welcome to your personalised profile page"
            data={[]}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
        />
    )
}

export default MyProfile