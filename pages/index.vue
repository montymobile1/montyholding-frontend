<template>
    <Banner />
    <div id="about-us">
        <AboutUs />
    </div>
    
    <div id="board-of-directors">
        <BoardOfDirectors title="Monty Mobile board of directors"
        description="A global leader in telecommunications, Monty Mobile delivers innovative technology and communication solutions to mobile network operators, enterprises, and service providers worldwide."
        :directors="BODMontyMobile" :button="{ link: 'https://montymobile.com', text: 'Visit Monty Mobile Website' }" />
        <BoardOfDirectors :colored="true" :dark="true" title="Monty Finance board of directors"
        description="Monty Finance is a local financial technology service provider. They are dedicated to meeting the needs of underserved, and unbanked communities through a comprehensive range of services across various verticals and markets."
        :directors="BODMontyFinance"
        :button="{ link: 'https://montyfinance.co.uk', text: 'Visit Monty Finance Website' }" />
    </div>
   

    <div id="our-business-endeavors">
        <BusinessEndeavors />
    </div>
    
    <div id="our-story">
        <OurStory />
    </div>
</template>

<script setup>
const BODMontyMobile = [
    {
        image: '/img/mountasser-hachem-s.webp',
        name: 'Mountasser Hachem',
        position: 'Founder and Chairman',
        linkedIn: 'https://www.linkedin.com/in/mountasser-hachem-877a7a2a/',
        bio: 'Mr. Hachem known as Monty, a visionary entrepreneur admired by colleagues and industry peers, is the driving force behind Monty Holding. His vision and determination sparked the company’s journey over two decades ago, establishing it as a key player in the telecom industry. Under his leadership, Monty Holding has expanded into a global leader with a presence across multiple continents. Monty\'s exceptional business acumen is showcased in his transformation of Comium, a mobile operator on the brink of collapse. His exceptional ability to recognize potential and transform struggling businesses into thriving enterprises is unmatched. A natural innovator, Monty has shifted his focus to the growing FinTech sector. His forward-thinking approach keeps him at the forefront of this industry, propelling the company towards a future defined by disruption.'
    },

    {
        image: '/img/biola-s.webp',
        name: 'Biola Alabi',
        position: 'Board Member',
        linkedIn: 'https://www.linkedin.com/in/biola-alabi/',
        bio: 'Biola Alabi is a prominent business leader with extensive experience in media, venture capital, and strategic partnerships. As a General Partner at Acasia in Egypt, she focuses on venture capital and business planning. Her role as Deputy Chair of the Lagos Angel Network in Nigeria involves recruiting and educating early-stage investors to foster entrepreneurship in Nigeria. Biola also serves on the board of Unilever Nigeria PLC, where she leverages her expertise in strategic partnerships and contract negotiation. As the founder of Grooming For Greatness, she cultivates leadership among young African professionals. Her past roles include being a Senior Advisor & Executive Producer at Biola Alabi Media and Entertainment, where she provided consulting for media and technology initiatives. She is also a Yale World Fellow in the USA and a former Managing Director at M-Net Africa in Lagos, Nairobi and Johannesburg, where she led major expansion projects and earned accolades for her visionary leadership. Biola’s career also includes significant roles at Sesame Workshop and Bigwords.com, demonstrating her broad expertise across various sectors.'
    },
    {
        image: '/img/hassan-s.webp',
        name: 'Hassan Kabbani',
        position: 'Board Member',
        linkedIn: 'https://www.linkedin.com/in/hassan-kabbani-28555666/',
        bio: 'Hassan Kabbani is an executive with a robust background in telecommunications and technology. Previously, as CEO of Zain KSA, Hassan achieved significant financial and operational turnaround, growing revenue by 10% and EBITDA by 102%, while reducing debt/EBITDA ratio from 16 to 7. He also served as CEO of Orange Egypt and Djezzy, where he drove substantial growth and market leadership. His earlier roles include CEO of Telecel International in Switzerland, Sabafon in Yemen, and Syrialtel in Syria where he spearheaded operational restructuring and launched new mobile operations. As Chief Commercial Officer at AALTO HAPS in Dubai, a subsidiary of Airbus, Hassan leads commercial strategies for Zephyr, a solar-powered High Altitude Platform Station designed to extend network coverage. His extensive board experience includes roles at Togocom Officiel, and NuRAN Wireless in Canada, reflecting his expertise across various international markets.'
    },
    {
        image: '/img/susanne-s.webp',
        name: 'Susanne Hannestad',
        position: 'Board Member',
        linkedIn: 'https://www.linkedin.com/in/susannehannestad/',
        bio: 'Susanne Hannestad is an esteemed figure in the global finance industry, bringing over 25 years of experience in governance, financial strategy, and corporate oversight. With a career spanning leadership roles at Nordea, Mastercard, and Visa, Susanne\'s influence extends across the financial sector, where she continues to champion robust governance practices. As CEO of Fintech Mundi in Norway, she has been pivotal in promoting financial inclusion and supporting the growth of innovative financial services. Susanne serves on the boards of ClearBank in the UK, Triodos Bank in the Netherlands, and Crunchfish AB in India, where her insights into financial governance and sustainable banking have been invaluable. Her previous board positions at Neonomics and Payr, along with her role as a Venture Partner at BlackFin Capital Partners, underscore her deep commitment to financial integrity and governance excellence. Additionally, her experience as a former competitive handball player adds a unique perspective to her strategic and disciplined approach to governance.'
    },
    
    {
        image: '/img/jean-s.webp',
        name: 'Jean Jacques Panny',
        position: 'Board Member',
        linkedIn: 'https://www.linkedin.com/in/jean-jacques-pany/',
        bio: 'Jean Jacques Pany is an executive with extensive experience in the telecom and technology sectors. Notably, at Orange, he served for nearly two decades in various pivotal roles, including Vice President for Orange Europe, where he managed a substantial budget and workforce, and Vice President for Orange Spain, driving significant financial and operational objectives. His earlier roles at Orange also included Vice President of Digital for Orange France and Operations for Orange Poland, demonstrating his expertise in restructuring, strategic planning, and business development. As President of TheComPany.eu.com in Paris, he provides strategic advisory and investment guidance to mid-sized and startup companies, fostering growth through innovation. His previous tenure as Group Director of Technology Projects at VEON in Amsterdam showcased his leadership on the Group Leadership Team. Jean Jacques’ career spans back to his early roles at Bull, ENGIE, and McDermott International, showcasing a broad and impactful career in technology and telecommunications. '
    },
    {
        image: '/img/joshua-s.webp',
        name: 'Joshua Smythwood',
        position: 'Board Member',
        linkedIn: 'https://www.linkedin.com/in/joshua-smythwood/',
        bio: 'Joshua Smythwood is an executive with an impressive career spanning the technology and telecommunications sectors in multipe countries including the UK, USA, South Africa, and more. Currently serving as Chief Operating Officer at Open Access Data Centres (OADC) and Chief Strategy and M&A Officer at WIOCC Group, Joshua drives strategic initiatives and operational excellence. His board roles at Zanzibar Telecom Ltd., alongside his leadership positions at WIOCC and Telesis Tz Ltd., reflect his extensive expertise. Notably, at Millicom (Tigo), he excelled as Vice President and CTIO Africa, overseeing technology and enterprise business across eight African countries. His previous roles at Nokia involved leading Managed Services and Transformation for the African region, showcasing his prowess in business development and market expansion.'
    }
];

const BODMontyFinance = [
    {
        image: '/img/monty-c.webp',
        name: 'Mountasser Hachem',
        position: 'CEO',
        linkedIn: 'https://www.linkedin.com/in/mountasser-hachem-877a7a2a/',
        bio: 'Mr. Hachem known as Monty, a visionary entrepreneur admired by colleagues and industry peers, is the driving force behind Monty Holding. His vision and determination sparked the company’s journey over two decades ago, establishing it as a key player in the telecom industry. Under his leadership, Monty Holding has expanded into a global leader with a presence across multiple continents. Monty\'s exceptional business acumen is showcased in his transformation of Comium, a mobile operator on the brink of collapse. His exceptional ability to recognize potential and transform struggling businesses into thriving enterprises is unmatched. A natural innovator, Monty has shifted his focus to the growing FinTech sector. His forward-thinking approach keeps him at the forefront of this industry, propelling the company towards a future defined by disruption.'
    },
    // {
    //     image: '/img/mike-c.webp',
    //     name: 'Mike Quintanilla',
    //     position: 'Board Member',
    //     linkedIn: 'https://www.linkedin.com/in/michaelquintanilla/',
    //     bio: 'Mike Quintanilla is a leader in fintech and blockchain technology, with a proven track record across several high-impact roles in the USA. At SoftServe, as the Director of Blockchain & BaaS, he led the transformation of payment systems by integrating advanced technologies and collaborating with industry giants such as AWS, Azure, and GCP. Prior to this, as Senior Director of Fintech & Innovation at Blockchains, Inc., Mike enhanced AML/CFT frameworks and focused on innovative solutions within the digital asset ecosystem. His role as Chief Innovation Officer at GenuBank saw him overhaul the bank\'s technology infrastructure, implementing real-time payment services and crypto compliance initiatives. His earlier experience includes strategic positions at First Horizon Bank, where he advanced blockchain integration and cryptocurrency initiatives, and at Susquehanna Bank and Mitsubishi UFJ Trust & Banking Corporation, where he made significant contributions to FX trading and client relations. Mike\'s extensive background in fintech, blockchain, and regulatory compliance underscores his expertise in driving technological and strategic advancements in the financial sector.'
    // },
    {
        image: '/img/randa-c.webp',
        name: 'Randa Naboulsi',
        position: 'Group CFO',
        linkedIn: 'https://www.linkedin.com/in/randa-naboulsi-4b000b60/',
        bio: 'An ambitious, result oriented and accomplished Chief Financial Officer, Randa Naboulsi graduated with a BBA from the University of Balamand in Lebanon in 1995 and later completed her studies with an MBA from the Lebanese American University of Beirut in 2008. She has extensive hands-on expertise in Corporate Finance, Treasury, Budgeting and Forecasting, topping it up with strong connections with investors.'
    },
    {
        image: '/img/susanne-c.webp',
        name: 'Susanne Hannestad',
        position: 'Board Member',
        linkedIn: 'https://www.linkedin.com/in/susannehannestad/',
        bio: 'Susanne Hannestad is a visionary leader in the fintech industry, with over 25 years of experience in driving technological innovation and transformation. Her leadership roles at Nordea, Mastercard in Europe, and Visa further highlight her deep expertise in fintech and payments, making her a sought-after advisor in the tech-driven financial sector. As CEO of Fintech Mundi in Norway, she has a proven track record in scaling cutting-edge fintech companies and spearheading initiatives like the Financial Inclusion Summit. Susanne\'s extensive board experience includes non-executive roles at ClearBank in the UK, Zimpler in Brazil, Crunchfish AB in India, and previously at Neonomics and Payr in Norway, where she has been instrumental in guiding these companies through complex technological landscapes. Beyond her professional achievements, Susanne\'s background as a competitive handball player reflects her dynamic and strategic approach to leadership.'
    },
    
    {
        image: '/img/arvinder-c.webp',
        name: 'Arvinder Gujral',
        position: 'Board Member',
        linkedIn: 'https://www.linkedin.com/in/arvindergujral/',
        bio: 'Arvinder Gural is an executive with a robust track record in driving global growth and innovation in the technology and telecom sectors. Previously, he served as Managing Director for Southeast Asia at Twitter in APAC, where he turned around negative business trends, achieving 7.5X growth and establishing SEA as a top 10 market in revenue and audience. As a founding member of Twitter India, he played a pivotal role in its setup and expansion. As Chief Revenue Officer at WATI in Singapore, he led go-to-market strategies, revenue generation, and customer success initiatives, significantly expanding the company’s global footprint. Arvinder also held leadership roles at Aircel, Geodesic, CIBER, iGATE in San Francisco, and Infosys, where he drove substantial revenue growth, built strategic partnerships, and led impactful marketing and business development initiatives. His extensive experience and strategic vision have been instrumental in scaling businesses and navigating complex markets.'
    },
    {
        image: '/img/sarah-c.webp',
        name: 'Sarah Alateeqi',
        position: 'Board Member',
        linkedIn: 'https://www.linkedin.com/in/saranalateeqi/',
        bio: 'Sarah Alateeqi is an executive with a robust track record in investment and innovation. She currently serves as the Chief Executive Officer of Al-Mal Investment Company (KPSC) in Kuwait, a role she has held since May 2023, following her tenure as Acting CEO and Vice Chairman of the Board.  Prior to her leadership at Al-Mal, Sarah was a General Partner at Oasis Capital in North America, where she focused on investing in seed-stage startups in North America. Her earlier roles include serving as Chief Executive Officer at Zay General Trading Company in Kuwait, where she transformed the luxury e-commerce fashion platform with a focus on sustainability. Sarah also founded Supper.Club, a startup aimed at fostering business connections through intimate dinners. In addition to her executive roles, Sarah has been actively involved in venture advisory and company building at Kuwait Ventures, and has served on the boards of MAC SA and wasel. Her career began with financial analysis roles at National Investment Company and Kipco Asset Management Company (KAMCO), where she specialized in private equity and fund performance. Sarah\'s extensive experience in investment management and leadership across diverse sectors highlights her expertise in driving business growth and innovation.'
    },
];
</script>