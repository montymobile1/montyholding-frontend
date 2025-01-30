<template>
    <div>
        <img @click="director.bio && openBioModal(index)"
    :class="{ 'cursor-pointer': director.bio, 'cursor-default': !director.bio, 'colored-hover': props.colored }" v-if="director.image" class="max-lg:max-h-[160px] max-h-[200px] director-image mb-5 mx-auto rounded-full" :src="director.image" :alt="director.name">
    <div class="flex flex-col max-lg:gap-0 gap-1 items-center">
        <h4 :class="{ 'cursor-pointer': director.bio, 'cursor-default': !director.bio }" @click="director.bio && openBioModal(index)" class="hover:text-[#B27E41] max-lg:text-[18px] text-[22px] font-bold text-center">{{ director.name }}</h4>
        <h5 :class="dark ? 'text-white' : 'text-[#B27E41]'" class="max-lg:text-[16px] text-xl text-center">
            <i>{{ director.position }}</i>
        </h5>
        <a v-if="director.linkedIn" class="inline-block mt-2" target="_blank" :href="director.linkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5562 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2937 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516Z" fill="url(#paint0_linear_1660_2)"/>
                <defs>
                    <linearGradient id="paint0_linear_1660_2" x1="-176.861" y1="12.0289" x2="44.6212" y2="12.0289" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#BC945D"/>
                    <stop offset="0.28" stop-color="#966F41"/>
                    <stop offset="0.43" stop-color="#C89B62"/>
                    <stop offset="0.56" stop-color="#EFBD7C"/>
                    <stop offset="0.63" stop-color="#FECB86"/>
                    <stop offset="0.71" stop-color="#ECBB7A"/>
                    <stop offset="0.87" stop-color="#BF935C"/>
                    <stop offset="1" stop-color="#966F41"/>
                    </linearGradient>
                </defs>
            </svg>
        </a>
    </div>
    </div>
    
</template>

<script setup>
const props = defineProps(['director','openBioModal','index']);
</script>

<style lang="scss" scoped>

</style>