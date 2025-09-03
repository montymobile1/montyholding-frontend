<template>
    <section class="bg-black pt-10 pb-10 lg:pt-20 lg:pb-28 text-white">
        <div class="container"> 
            <SectionIntro title="About Us"
                description="Founded in 1998 by visionary entrepreneur Mountasser Hachem, Monty Holding has rapidly evolved into a global powerhouse, reshaping industries and exceeding expectations. From our UK headquarters, we're not just delivering solutions but we're architecting the future for our clients and partners."
                class="text-white" />

            <div class="relative grid grid-cols-2 md:grid-cols-4 mt-10 lg:mt-20 lg:max-w-[1100px] lg:mx-auto">
                <div v-for="stat in stats" class="stat text-center p-8 border border-[#BC945D]">
                    <h4 class="text-3xl font-bold z-20">{{ stat.title }}</h4>
                    <p>{{ stat.description }}</p>
                </div>
            </div>

            <div class="mt-10 lg:mt-20 max-w-[800px] mx-auto">
                <div class="text-center">
                    <div class="inline-flex gap-5">
                        <button :class="activeButton === 'mission' ? 'opacity-100' : 'opacity-50'" @click="handleActiveClick('mission')" class="mission-vision">Mission</button>
                        <button :class="activeButton === 'vision' ? 'opacity-100' : 'opacity-50'" @click="handleActiveClick('vision')" class="mission-vision">Vision</button>
                    </div>

                    <div class="mt-10">
                        <h4 v-if="activeButton === 'mission'" ref="mission">Our mission is to ignite positive impact through exceptional performance. We’re in the business of building better worlds.</h4>
                        <h4 v-if="activeButton === 'vision'"ref="vision" id="vision">Unleashing the full potential of a connected world through innovative telecom and financial solutions, aiming to achieve global dominance in both sectors.</h4>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>

<script setup>

const activeButton = ref('mission');

const handleActiveClick = (item) => {
    if(item === 'mission'){
        activeButton.value = 'mission';
    }
    if(item === 'vision'){
        activeButton.value = 'vision';
    }
}
const stats = [
    {
        title: '2.5 B',
        description: 'Mobile Subscribers'
    },
    {
        title: '120',
        description: 'Countries Worldwide'
    },
    {
        title: '$245 M',
        description: 'Revenue FY23',
    },
    {
        title: '3.7%',
        description: 'EBITDA Margin FY23'
    },
    {
        title: '35',
        description: 'Exclusive / Preferred Partners'
    },
    {
        title: '12.8%',
        description: 'Revenue CAGR FY23A-FY29E'
    },
    {
        title: '$84.4 M',
        description: 'Capital Employed'
    },
    {
        title: '19',
        description: 'Countries of Presence'
    }
];
</script>
