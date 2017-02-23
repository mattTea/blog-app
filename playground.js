var newComment = 'great blog';
console.log('newComment:', newComment);

var commentParams = {
    type_slug: 'comments',
    title: 'Comment Title',
    content: newComment
};

var commentParamsJson = JSON.stringify(commentParams);
console.log(commentParamsJson);