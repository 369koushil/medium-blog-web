import { useEffect, useState } from "react"
import axios from "axios";
import { BACKEND_URL } from "../../config";


export interface Blog {
    "content": string;
    "title": string;
    "id": number
    "author": {
        "name": string
    }
}

export const useBlog = ({ id }: { id: string }) => {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog>();

    useEffect(() => {
        axios.get(`${BACKEND_URL}/blog/blogid/${id}`, {
            headers: {
                token: localStorage.getItem("token")
            }
        },
    )
            .then(response => {
                console.log(response.data)
                setBlog(response.data.blog);
                setLoading(false);
            })
    }, [id])

    return {
        loading,
        blog
    }

}
export const useBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(() => {
        axios.get(`${BACKEND_URL}/blog/bulk`, {
            headers: {
                token: localStorage.getItem("token")
            }
        })
            .then(response => {
                setBlogs(response.data.blog);
                setLoading(false);
            })
    }, [])

    return {
        loading,
        blogs
    }
}