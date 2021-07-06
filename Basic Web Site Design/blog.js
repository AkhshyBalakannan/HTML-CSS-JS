const readmore = document.createElement('button');
readmore.classList.add('btn', 'btn-warning');
readmore.setAttribute('id', 'viewing')
readmore.textContent = 'Read More!';
document.querySelector('.postPara').after(readmore);
const view = document.querySelector('#viewing');
const expandView = document.querySelector('#expandMe');
const pdiv = document.createElement('div');
pdiv.classList.add('col-10');
const showLessButton = document.createElement('button');
showLessButton.classList.add('btn', 'btn-warning');
showLessButton.textContent = 'SHOW LESS';
view.addEventListener('click', (e) => {
    e.preventDefault();
    pdiv.innerHTML = "<ol><li> <b> Anyone can make one:</b></li>\
                    <p> For better or worse, anyone can write a blog post about anything they want.Everyone has a\
                    voice and the best voices will rise to the top.</p>\
                <li><b>The writer can show their personality:</b></li>\
                <p>In blog posts, the writer has more leeway to add in their voice and personality than other\
                                    types of writing.</p>\
                <li><b>Blogs are a great form of mass communication:</b></li>\
                <p>You can help people, learn new things, entertain your audience—the possibilities are endless\
                        and amazing. Blogging opens up all of these to a very wide audience.\
                                </p>\
                <li><b>You can make money:</b></li>\
                <p>Get the right blog going and you can make a lot of money through advertising and sponsored\
                                    posts.</p>\
                <li><b>It allows people to craft better thoughts:</b></li>\
                <p>Instead of reading haphazard, uneducated Facebook statuses, it’s much better to see people’s\
                                    thought process in a well-written blog post.</p>\
                <li><b>You can establish a community:</b></li>\
                <p>Blogging allows you to connect with other individuals who share the same interests. Sharing\
                                    ideas and opinions within your community helps establish yourself as a thought leader.</p>\
                <li><b>Good for SEO:</b></li>\
                <p>Keeping content on your site fresh and relevant, you can use your blog to boost the search\
                                    engine ranking (SEO) of your site and your business.</p>\
                <li><b>It brings people back to your site:</b></li>\
                <p>If your blog is strong enough and updated regularly, people will come back looking for more\
                                    and bring traffic back to your site as well.</p>\
                <li><b>It’s free:</b></li>\
                <p>It costs you a grand total of zero dollars to post to the blog, so if you have something to\
                                    say, there’s nothing to stop you.</p>\
                <li><b>You can establish yourself as a thought leader:</b></li>\
                <p>A blog is a great place for your original thoughts, and it can be a wonderful way to show off\
                        your individuality. If people like your ideas, you can become a thought leader in your\
                         industry!</p></ol > ";
    document.querySelector('#viewing').after(showLessButton);
    document.querySelector('#viewing').after(pdiv);
    document.querySelector('#viewing').remove();
})
showLessButton.addEventListener('click', (e) => {
    e.preventDefault();
    pdiv.remove();
    showLessButton.remove();
    document.querySelector('.postPara').after(readmore);
})


