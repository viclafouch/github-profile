<template>
    <article class="commit">
        <div class="title">
            <h3>Commits on {{ commit.created_at.format('LL') }}</h3>
        </div>
        <ul>
            <li v-for="c in commit.commits" :key="c.sha">
                <div class="flex-me item-flex">
                    <div>
                        <p class="commit-title">
                            <a :href="`https://github.com/${commit.repo.name}/commit/${c.sha}`">{{ c.message }}</a>
                        </p>
                        <div class="flex-me">
                            <a :href="user.html_url" class="c-avatar">
                                <img :src="user.avatar_url" class="avatar" />
                            </a>
                            <a :href="user.html_url" class="commit-author">
                                {{ user.login }}
                            </a>
                            <span>committed {{ commit.created_at.fromNow() }}</span>
                        </div>
                    </div>
                   <a :href="`https://github.com/${commit.repo.name}/commit/${c.sha}`" class="sha-link">{{ c.sha.substring(0,7) }}</a>
                </div>
            </li>
        </ul>
    </article>
</template>

<script>

export default {
    name: 'Commit',
    props: ['commit', 'user'],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    article.commit {
        padding-bottom: 6px !important;
        position: relative;
    }

    .item-flex { justify-content: space-between; align-items: center; }

    div.title { position: relative; }

    .line {
        width: 0%;
        transition: all 0.3s;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        height: 2px;
        background-color: rgb(198, 228, 139);
        width: 100%;
    }

    article.commit h3 {
        font-size: 12px;
        font-weight: 500;
        color: #586069;
        margin: 0;
        padding-right: 8px;
        display: inline-block !important;
    }

    ul {
        margin: 6px 0;
    }

    ul li {
        position: relative;
        list-style: none;
        width: 100%;
        padding: 8px 10px;
        border: 1px solid #eaecef;
        box-sizing: border-box;
    }

    ul li:hover {
        background-color: #f6fbff;
    }

    .commit-title {
        font-weight: 600 !important;
        margin: 0;
        margin-bottom: 4px;
    }

    .commit-title a {
        color: #444d56;
        display: inline-block;
        text-decoration: none;
        font-size: 14px !important;
    }

    .commit-title a:hover {
        text-decoration: underline;
    }

    a { display: block; }

    img {
        z-index: 2;
        display: block;
        width: 20px;
        height: 20px;
        box-sizing: content-box;
        background-color: #fff;
        border-right: 1px solid #fff;
        border-radius: 2px;
        transition: margin 0.1s ease-in-out;
    }

    a.commit-author {
        font-weight: 600;
        color: #586069;
        text-decoration: none;
        font-size: 13px;
        margin-left: 7px;
        white-space: nowrap;
    }

    a.commit-author:hover {
        text-decoration: underline;
    }

    span {
        font-size: 13px;
        margin-left: 7px;
        font-weight: 400;
        color: #586069;
    }

    a.sha-link {
        color: #0366d6;
        background-color: #fff;
        background-image: none;
        display: inline-block;
        padding: 6px 12px;
        font-weight: 600;
        line-height: 20px;
        white-space: nowrap;
        vertical-align: middle;
        cursor: pointer;
        font-size: 12px;
        text-decoration: none;
        border: 1px solid rgba(27,31,35,0.2);
        border-radius: 3px;
    }

    a.sha-link:hover {
        color: #fff;
        background-color: #0366d6;
        background-image: none;
        border-color: #0366d6;
    }
</style>