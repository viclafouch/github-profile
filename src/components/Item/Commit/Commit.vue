<template>
    <article class="commit">
        <div class="title">
            <h3>{{ commit.created_at.format('MMM YYYY') }}</h3>
                <span class="line" transition="expand"></span>
        </div>
       <p>{{ commit.commits.length }} commit</p>
    </article>
</template>

<script>

export default {
    name: 'Commit',
    props: ['commit', 'user'],
    data() {
        return {
            active: false
        }
    },
    async mounted() {
        await new Promise(resolve => setTimeout(resolve, 200))
        this.active = true;
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    article.commit {
        padding-bottom: 24px !important;
        position: relative;
    }

    div.title { position: relative; }

    .line {
        width: 0%;
        transition: all 0.3s;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        height: 2px;
        background-color: rgb(198, 228, 139);
    }

    .line.active {
        width: 100%;
    }

    article.commit h3 {
        font-size: 12px;
        font-weight: 600;
        margin: 0;
        padding-right: 8px;
        display: inline-block !important;
    }

    .expand-transition {
  transition: all .3s ease;
  height: 30px;
  padding: 10px;
  background-color: #eee;
  overflow: hidden;
}
/* .expand-enter defines the starting state for entering */
/* .expand-leave defines the ending state for leaving */
.expand-enter,
.expand-leave {
  height: 0;
  padding: 0 10px;
  opacity: 0;
}

</style>