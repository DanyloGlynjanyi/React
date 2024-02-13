const Post = ({post}) => {
    const {id,title,body,userId}=post;
    console.log(post)
    return (
        <div>
            <hr/>
            <div>id:{id}</div>
            <div>title:{title}</div>
            <div>body:{body}</div>
            <div>userId:{userId}</div>
            <hr/>
        </div>
    );
};

export {Post};