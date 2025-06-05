<script setup lang="ts"></script>
<template>
    <section class="section container">
        <div class="section-body">
            <div class="section-content">
                <h4>Учетные записи</h4>
                <button class="btn btn-outline-primary icon-plus">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 4v16m8-8H4" />
                    </svg>
                </button>
            </div>
        </div>
    </section>
</template>
<style scoped>
.section-body {
    display: flex;
    flex-direction: column;
    gap: 40px;
}
.section-content {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    gap: 20px;
}
h4 {
    margin: 0;
}
</style>
