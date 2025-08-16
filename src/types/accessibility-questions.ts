// accessibility-questions.ts
export interface Option {
  id: string;
  text: string;
}

export interface Question {
  id: number;
  text: string;
  options: Option[];
  answer: string;
  category: string;
  explanation?: string;
}

export const accessibilityQuestions: Question[] = [
  // WCAG Core Principles (POUR)
  {
    id: 1,
    text: "Which principle of WCAG requires that everyone must be able to perceive your content with at least one of their senses?",
    options: [
      { id: "a", text: "Perceivable" },
      { id: "b", text: "Operable" },
      { id: "c", text: "Understandable" },
      { id: "d", text: "Robust" }
    ],
    answer: "a",
    category: "WCAG Principles",
    explanation: "The Perceivable principle requires that information and user interface components must be presentable to users in ways they can perceive. This means that users must be able to perceive the information being presented with at least one of their senses."
  },
  {
    id: 2,
    text: "Which principle focuses on ensuring everyone can operate and navigate your interface?",
    options: [
      { id: "a", text: "Perceivable" },
      { id: "b", text: "Operable" },
      { id: "c", text: "Understandable" },
      { id: "d", text: "Robust" }
    ],
    answer: "b",
    category: "WCAG Principles",
    explanation: "The Operable principle requires that user interface components and navigation must be operable. This means that users must be able to operate the interface (the interface cannot require interaction that a user cannot perform)."
  },
  {
    id: 3,
    text: "Which principle focuses on making sure everyone must be able to understand your content and how to use your interface?",
    options: [
      { id: "a", text: "Perceivable" },
      { id: "b", text: "Operable" },
      { id: "c", text: "Understandable" },
      { id: "d", text: "Robust" }
    ],
    answer: "c",
    category: "WCAG Principles",
    explanation: "The Understandable principle requires that information and the operation of a user interface must be understandable. This means keeping it simple, consistent, and helpful, while avoiding jargon and complicated instructions."
  },
  {
    id: 4,
    text: "Which principle ensures your content must work across many platforms, browsers, and assistive technologies?",
    options: [
      { id: "a", text: "Perceivable" },
      { id: "b", text: "Operable" },
      { id: "c", text: "Understandable" },
      { id: "d", text: "Robust" }
    ],
    answer: "d",
    category: "WCAG Principles",
    explanation: "The Robust principle requires that content must be robust enough to be interpreted reliably by a wide variety of user agents, including assistive technologies. This means using proper code that follows standards."
  },

  // Disability Models
  {
    id: 5,
    text: "Which model of disability focuses on the concept that disability is primarily caused by environmental and social barriers rather than an individual's medical condition?",
    options: [
      { id: "a", text: "Medical Model" },
      { id: "b", text: "Social Model" },
      { id: "c", text: "Charity Model" },
      { id: "d", text: "Economic Model" }
    ],
    answer: "b",
    category: "Disability Models",
    explanation: "The Social Model views disability as created by barriers in society, not by the person's medical condition. It focuses on removing societal barriers to enable full participation."
  },
  {
    id: 6,
    text: "A community center with a statement policy that says 'We provide special assistance to the handicapped who cannot navigate our building independently' most closely aligns with which model of disability?",
    options: [
      { id: "a", text: "Charity Model" },
      { id: "b", text: "Social Model" },
      { id: "c", text: "Medical Model" },
      { id: "d", text: "Human Rights Model" }
    ],
    answer: "a",
    category: "Disability Models",
    explanation: "The Charity Model views people with disabilities as victims of circumstance who need help, often using terminology like 'handicapped' and focusing on providing 'special assistance' rather than inclusive design."
  },
  {
    id: 7,
    text: "When a company focuses on the economic impact of hiring people with disabilities, including tax incentives, workplace accommodations costs, and productivity considerations, they are primarily operating under which model of disability?",
    options: [
      { id: "a", text: "Social Model" },
      { id: "b", text: "Economic Model" },
      { id: "c", text: "Medical Model" },
      { id: "d", text: "Biopsychosocial Model" }
    ],
    answer: "b",
    category: "Disability Models",
    explanation: "The Economic Model views disability primarily through a cost-benefit analysis lens, considering the financial implications of disability for society, businesses, and individuals."
  },
  {
    id: 8,
    text: "A physician telling a patient with a mobility impairment that 'the goal of treatment is to cure your condition so you can function normally again' best represents which model of disability?",
    options: [
      { id: "a", text: "Functional Model" },
      { id: "b", text: "Social Model" },
      { id: "c", text: "Medical Model" },
      { id: "d", text: "Biopsychosocial Model" }
    ],
    answer: "c",
    category: "Disability Models",
    explanation: "The Medical Model views disability as a defect or disease that needs to be 'fixed' or 'cured' through medical intervention, with the goal of achieving 'normal' functioning."
  },
  {
    id: 9,
    text: "The World Health Organization's International Classification of Functioning, Disability and Health (ICF) framework, which considers biological, individual, and social factors in disability, best represents which model?",
    options: [
      { id: "a", text: "Medical Model" },
      { id: "b", text: "Social Model" },
      { id: "c", text: "Biopsychosocial Model" },
      { id: "d", text: "Charity Model" }
    ],
    answer: "c",
    category: "Disability Models",
    explanation: "The Biopsychosocial Model integrates biological, psychological, and social factors, recognizing that disability results from a complex interaction between health conditions and contextual factors."
  },
  {
    id: 10,
    text: "An accessibility approach that focuses on the inherent dignity, individual autonomy, and freedom to make one's own choices regardless of disability aligns most closely with which model?",
    options: [
      { id: "a", text: "Human Rights Model" },
      { id: "b", text: "Medical Model" },
      { id: "c", text: "Charity Model" },
      { id: "d", text: "Economic Model" }
    ],
    answer: "a",
    category: "Disability Models",
    explanation: "The Human Rights Model views disability as a human rights issue, focusing on the inherent dignity of all persons and the right to equal participation in society."
  },
  {
    id: 11,
    text: "A university policy that requires students with disabilities to provide extensive medical documentation to 'prove' they need accommodations before any adjustments will be considered most closely reflects which model of disability?",
    options: [
      { id: "a", text: "Social Model" },
      { id: "b", text: "Medical Model" },
      { id: "c", text: "Human Rights Model" },
      { id: "d", text: "Biopsychosocial Model" }
    ],
    answer: "b",
    category: "Disability Models",
    explanation: "The Medical Model places emphasis on medical diagnosis and documentation as proof of disability, putting the burden on individuals to prove their needs rather than creating inclusive environments."
  },
  {
    id: 12,
    text: "Which model of disability is most closely associated with the development of the Americans with Disabilities Act (ADA) and similar anti-discrimination legislation worldwide?",
    options: [
      { id: "a", text: "Economic Model" },
      { id: "b", text: "Medical Model" },
      { id: "c", text: "Charity Model" },
      { id: "d", text: "Social Model" }
    ],
    answer: "d",
    category: "Disability Models",
    explanation: "The Social Model influenced much disability rights legislation, including the ADA, by shifting focus to removing societal barriers and ensuring equal rights and opportunities."
  },
  {
    id: 13,
    text: "A school principal who says 'We can't include students with certain disabilities in regular classes because they need special education by experts who know how to fix their learning problems' is expressing a perspective aligned with which model?",
    options: [
      { id: "a", text: "Medical Model" },
      { id: "b", text: "Social Model" },
      { id: "c", text: "Cultural Model" },
      { id: "d", text: "Human Rights Model" }
    ],
    answer: "a",
    category: "Disability Models",
    explanation: "This statement reflects the Medical Model's view that disabilities are deficits that need specialized intervention or 'fixing' rather than adapting the environment to be more inclusive."
  },
  {
    id: 14,
    text: "The cultural-linguistic model of disability is most commonly associated with which group?",
    options: [
      { id: "a", text: "People with mobility impairments" },
      { id: "b", text: "People with visual impairments" },
      { id: "c", text: "Deaf community" },
      { id: "d", text: "People with cognitive disabilities" }
    ],
    answer: "c",
    category: "Disability Models",
    explanation: "The Cultural-Linguistic Model is particularly embraced by many in the Deaf community who view deafness not as a disability but as the foundation for a cultural and linguistic minority group with its own language (sign language) and cultural norms."
  },

  // Web Accessibility Laws - US
  {
    id: 15,
    text: "Which of the following best describes a 'civil rights law' in the context of web accessibility?",
    options: [
      { id: "a", text: "A law that requires accessibility to be considered during procurement processes" },
      { id: "b", text: "A law that emphasizes equal rights and prohibits discrimination against people with disabilities" },
      { id: "c", text: "A law that applies only to specific industries like telecommunications or air travel" },
      { id: "d", text: "A law that requires technical accessibility standards to be met by all private businesses" }
    ],
    answer: "b",
    category: "Accessibility Laws",
    explanation: "Civil rights laws focus on equal rights and prohibiting discrimination, sometimes including technical standards but not always."
  },
  {
    id: 16,
    text: "Under the Americans with Disabilities Act (ADA), which of the following entities is NOT explicitly covered?",
    options: [
      { id: "a", text: "Private entities that operate places of public accommodation" },
      { id: "b", text: "Federal government entities" },
      { id: "c", text: "Religious entities" },
      { id: "d", text: "State government entities" }
    ],
    answer: "c",
    category: "Accessibility Laws",
    explanation: "The ADA specifically exempts religious entities and private clubs from its requirements, while covering businesses open to the public and government entities."
  },
  {
    id: 17,
    text: "Which U.S. law now incorporates WCAG Level A and AA guidelines by reference after its 2017 refresh?",
    options: [
      { id: "a", text: "Americans with Disabilities Act (ADA)" },
      { id: "b", text: "21st Century Communications and Video Accessibility Act (CVAA)" },
      { id: "c", text: "Section 508 of the Rehabilitation Act" },
      { id: "d", text: "Air Carrier Access Act (ACAA)" }
    ],
    answer: "c",
    category: "Accessibility Laws",
    explanation: "In January 2017, Section 508 underwent a refresh that incorporated WCAG level A and AA guidelines by reference, replacing its previous set of requirements."
  },
  {
    id: 18,
    text: "Which category of accessibility law would require a government agency to choose an accessible product over a non-accessible one when making purchases?",
    options: [
      { id: "a", text: "Industry-specific laws" },
      { id: "b", text: "Procurement laws" },
      { id: "c", text: "Civil rights laws" },
      { id: "d", text: "State accessibility laws" }
    ],
    answer: "b",
    category: "Accessibility Laws",
    explanation: "Procurement laws require that accessibility be taken into account when making purchases or contracting for services, often prohibiting the purchase of non-accessible products when accessible alternatives are available."
  },
  {
    id: 19,
    text: "The 21st Century Communications and Video Accessibility Act (CVAA) requires which of the following?",
    options: [
      { id: "a", text: "All websites to be accessible to people with disabilities" },
      { id: "b", text: "All video programs with captions on television must have closed-captions on the internet" },
      { id: "c", text: "All online-only videos to include closed captions" },
      { id: "d", text: "All government websites to include video transcripts" }
    ],
    answer: "b",
    category: "Accessibility Laws",
    explanation: "The CVAA requires that video programs presented with captions on television must also be presented with closed-captions when distributed on the internet."
  },
  {
    id: 20,
    text: "Who is primarily responsible for enforcing the Americans with Disabilities Act (ADA), Section 508, and the CVAA?",
    options: [
      { id: "a", text: "Federal Communications Commission" },
      { id: "b", text: "Department of Justice" },
      { id: "c", text: "Web Accessibility Initiative (WAI)" },
      { id: "d", text: "Consumers filing formal complaints" }
    ],
    answer: "d",
    category: "Accessibility Laws",
    explanation: "According to the content provided, the ADA, Section 508, and the CVAA are all enforced through consumers (people with disabilities) filing formal complaints."
  },
  {
    id: 21,
    text: "According to the Air Carrier Access Act (ACAA), which of the following is NOT considered one of the seven 'core air travel services' that had to be made accessible by December 2015?",
    options: [
      { id: "a", text: "Booking or changing a reservation" },
      { id: "b", text: "Accessing flight schedules" },
      { id: "c", text: "Viewing promotional offers and discounts" },
      { id: "d", text: "Checking in for a flight" }
    ],
    answer: "c",
    category: "Accessibility Laws",
    explanation: "The ACAA defines seven core activities that must be accessible, including booking, check-in, itineraries, flight status, frequent flyer accounts, schedules, and contact information. Promotional offers are not specifically included in this list."
  },
  {
    id: 22,
    text: "Section 508 of the Rehabilitation Act directly applies to which of the following?",
    options: [
      { id: "a", text: "All U.S. businesses with more than 15 employees" },
      { id: "b", text: "U.S. federal government entities only" },
      { id: "c", text: "Any website that serves U.S. customers" },
      { id: "d", text: "All public and private educational institutions" }
    ],
    answer: "b",
    category: "Accessibility Laws",
    explanation: "Section 508 directly applies only to U.S. federal government entities, though its effects have influenced many other organizations that do business with the federal government."
  },
  {
    id: 23,
    text: "Which web accessibility law specifically targets the airline industry?",
    options: [
      { id: "a", text: "Americans with Disabilities Act (ADA)" },
      { id: "b", text: "Section 508 of the Rehabilitation Act" },
      { id: "c", text: "Air Carrier Access Act (ACAA)" },
      { id: "d", text: "21st Century Communications and Video Accessibility Act (CVAA)" }
    ],
    answer: "c",
    category: "Accessibility Laws",
    explanation: "The ACAA is an industry-specific law that prohibits discrimination on the basis of disability in air travel and requires air carriers to accommodate passengers with disabilities."
  },
  {
    id: 24,
    text: "Under the Air Carrier Access Act (ACAA), which websites must conform to WCAG Level AA standards?",
    options: [
      { id: "a", text: "Only U.S. airline websites selling domestic flights" },
      { id: "b", text: "Only the homepage and booking pages of airline websites" },
      { id: "c", text: "U.S. and foreign air carrier websites that advertise or sell to the U.S. public" },
      { id: "d", text: "Only websites of airlines that receive federal funding" }
    ],
    answer: "c",
    category: "Accessibility Laws",
    explanation: "The ACAA requires both U.S. air carriers' public-facing pages and foreign carriers' public-facing pages used to advertise or sell to the U.S. public for air transportation that begins or ends in the U.S. to conform to WCAG Level AA."
  },
  {
    id: 25,
    text: "Who is directly affected by the laws of Section 508 of the Rehabilitation Act in addition to the U.S. federal government?",
    options: [
      { id: "a", text: "All organizations that do business with the federal government" },
      { id: "b", text: "Everyone seeking to make technologies accessible to people with disabilities" },
      { id: "c", text: "Anyone who uses the Internet" },
      { id: "d", text: "All U.S. citizens" }
    ],
    answer: "a",
    category: "Accessibility Laws",
    explanation: "Section 508 directly applies to federal government entities, but also affects organizations that do business with the federal government, as they need to provide accessible products and services."
  },
  {
    id: 26,
    text: "The Americans with Disabilities Act is an example of which type of accessibility law?",
    options: [
      { id: "a", text: "Civil rights law" },
      { id: "b", text: "Procurement law" },
      { id: "c", text: "Industry-specific law" },
      { id: "d", text: "Administrative law" }
    ],
    answer: "a",
    category: "Accessibility Laws",
    explanation: "The Americans with Disabilities Act is a civil rights law that prohibits discrimination against individuals with disabilities in all areas of public life."
  },

  // Categories of Disabilities
  {
    id: 27,
    text: "A condition that involves both hearing and vision loss, which may require tactile methods of communication, is categorized as which of the following?",
    options: [
      { id: "a", text: "Visual Disabilities" },
      { id: "b", text: "Auditory Disabilities" },
      { id: "c", text: "Deaf-blindness" },
      { id: "d", text: "Multiple/compound disabilities" }
    ],
    answer: "c",
    category: "Disability Categories",
    explanation: "Deaf-blindness is specifically identified as its own category of disability, recognizing the unique challenges and communication needs of individuals with combined hearing and vision loss."
  },
  {
    id: 28,
    text: "A web developer is designing a site that needs to be accessible for users with epilepsy. This consideration would fall under which category of disability?",
    options: [
      { id: "a", text: "Cognitive disabilities" },
      { id: "b", text: "Seizure disabilities" },
      { id: "c", text: "Psychological/psychiatric disabilities" },
      { id: "d", text: "Neurological disabilities" }
    ],
    answer: "b",
    category: "Disability Categories",
    explanation: "Epilepsy is characterized by recurring seizures and would be categorized under seizure disabilities."
  },
  {
    id: 29,
    text: "Which of the following accommodations would be most appropriate for a user with an auditory disability?",
    options: [
      { id: "a", text: "Screen reader compatibility" },
      { id: "b", text: "Captions for audio content" },
      { id: "c", text: "Keyboard navigation alternatives" },
      { id: "d", text: "Simplified language and instructions" }
    ],
    answer: "b",
    category: "Disability Categories",
    explanation: "Captions provide a text alternative for audio content, making it accessible to people with auditory disabilities who may not be able to hear the audio."
  },
  {
    id: 30,
    text: "An individual who experiences challenges with fine motor control when using a computer mouse would most likely be categorized as having which type of disability?",
    options: [
      { id: "a", text: "Visual Disabilities" },
      { id: "b", text: "Speech disabilities" },
      { id: "c", text: "Mobility, flexibility, and body structure disabilities" },
      { id: "d", text: "Cognitive disabilities" }
    ],
    answer: "c",
    category: "Disability Categories",
    explanation: "Fine motor control challenges relate to mobility and flexibility disabilities, affecting how someone can physically interact with devices."
  },
  {
    id: 31,
    text: "Which category of disability would include conditions such as dyslexia, attention deficit disorder, and autism spectrum disorders?",
    options: [
      { id: "a", text: "Cognitive disabilities" },
      { id: "b", text: "Psychological/psychiatric disabilities" },
      { id: "c", text: "Speech disabilities" },
      { id: "d", text: "Multiple/compound disabilities" }
    ],
    answer: "a",
    category: "Disability Categories",
    explanation: "Cognitive disabilities include conditions that affect cognitive processes such as learning, memory, attention, and language processing."
  },
  {
    id: 32,
    text: "When creating content for individuals with visual disabilities, which of the following is the most critical consideration?",
    options: [
      { id: "a", text: "Simplified vocabulary" },
      { id: "b", text: "Non-text alternatives for visual information" },
      { id: "c", text: "Limited use of animations and movement" },
      { id: "d", text: "Reduced background noise in audio" }
    ],
    answer: "b",
    category: "Disability Categories",
    explanation: "People with visual disabilities require non-visual alternatives (like alt text, audio descriptions, or tactile representations) to access visual information."
  },
  {
    id: 33,
    text: "An individual who uses augmentative and alternative communication (AAC) devices would most likely be categorized as having which type of disability?",
    options: [
      { id: "a", text: "Auditory Disabilities" },
      { id: "b", text: "Cognitive disabilities" },
      { id: "c", text: "Speech disabilities" },
      { id: "d", text: "Multiple/compound disabilities" }
    ],
    answer: "c",
    category: "Disability Categories",
    explanation: "AAC devices are primarily used by individuals with speech disabilities who need alternative methods to communicate verbally."
  },
  {
    id: 34,
    text: "A website that flashes content at a rate of more than 3 times per second could pose the greatest risk to users with which category of disability?",
    options: [
      { id: "a", text: "Visual Disabilities" },
      { id: "b", text: "Seizure disabilities" },
      { id: "c", text: "Cognitive disabilities" },
      { id: "d", text: "Psychological/psychiatric disabilities" }
    ],
    answer: "b",
    category: "Disability Categories",
    explanation: "Flashing content at certain rates can trigger seizures in individuals with photosensitive epilepsy, which falls under seizure disabilities."
  },
  {
    id: 35,
    text: "Which of the following would be considered a multiple/compound disability?",
    options: [
      { id: "a", text: "Blindness" },
      { id: "b", text: "Post-traumatic stress disorder" },
      { id: "c", text: "Cerebral palsy with intellectual disability" },
      { id: "d", text: "Dyslexia" }
    ],
    answer: "c",
    category: "Disability Categories",
    explanation: "Multiple/compound disabilities involve the presence of two or more disabilities simultaneously, such as a physical disability (cerebral palsy) combined with a cognitive disability (intellectual disability)."
  },
  {
    id: 36,
    text: "Anxiety disorders, bipolar disorder, and depression would be categorized under which type of disability?",
    options: [
      { id: "a", text: "Cognitive disabilities" },
      { id: "b", text: "Psychological/psychiatric disabilities" },
      { id: "c", text: "Multiple/compound disabilities" },
      { id: "d", text: "Seizure disabilities" }
    ],
    answer: "b",
    category: "Disability Categories",
    explanation: "These conditions affect mental health and emotional functioning, placing them in the psychological/psychiatric disabilities category."
  },
  {
    id: 37,
    text: "When designing accommodations for users with mobility disabilities, which of the following would be most important to consider?",
    options: [
      { id: "a", text: "Color contrast" },
      { id: "b", text: "Audio alternatives" },
      { id: "c", text: "Input alternatives to mouse interaction" },
      { id: "d", text: "Simplified content organization" }
    ],
    answer: "c",
    category: "Disability Categories",
    explanation: "People with mobility disabilities may have difficulty using standard input devices like a mouse, so alternative input methods are essential."
  },
  {
    id: 38,
    text: "Which disability category is most likely to benefit from the implementation of a consistent navigation structure and clear instructions on a website?",
    options: [
      { id: "a", text: "Auditory Disabilities" },
      { id: "b", text: "Speech disabilities" },
      { id: "c", text: "Cognitive disabilities" },
      { id: "d", text: "Visual Disabilities" }
    ],
    answer: "c",
    category: "Disability Categories",
    explanation: "Consistent navigation and clear instructions help users with cognitive disabilities by reducing cognitive load and making interfaces more predictable and easier to understand."
  },

  // Canadian Accessibility Laws
  {
    id: 39,
    text: "By what date does the Accessible Canada Act aim to make Canada barrier-free?",
    options: [
      { id: "a", text: "July 11, 2029" },
      { id: "b", text: "December 31, 2035" },
      { id: "c", text: "January 1, 2040" },
      { id: "d", text: "July 11, 2025" }
    ],
    answer: "c",
    category: "International Laws",
    explanation: "The Accessible Canada Act went into force on July 11, 2019, with the specific goal of making Canada barrier-free by January 1, 2040."
  },
  {
    id: 40,
    text: "Which of the following is NOT listed as a priority area in the Accessible Canada Act?",
    options: [
      { id: "a", text: "Employment" },
      { id: "b", text: "Healthcare" },
      { id: "c", text: "Information and communication technologies" },
      { id: "d", text: "Transportation" }
    ],
    answer: "b",
    category: "International Laws",
    explanation: "While the Accessible Canada Act covers seven priority areas (employment, built environment, information and communication technologies, other forms of communication, procurement, programs and services, and transportation), healthcare is not specifically listed as one of these priority areas."
  },
  {
    id: 41,
    text: "The Accessible Canada Act applies to which of the following?",
    options: [
      { id: "a", text: "All businesses operating in Canada" },
      { id: "b", text: "Only the federal government" },
      { id: "c", text: "The Canadian federal government and federally regulated private sectors" },
      { id: "d", text: "Provincial and municipal governments only" }
    ],
    answer: "c",
    category: "International Laws",
    explanation: "The scope of the law applies to the Canadian federal government and private sectors regulated by the government (e.g., banks, transportation, broadcasting, telecommunications, the Canadian Forces and the Royal Mounted Police)."
  },
  {
    id: 42,
    text: "Which of the following entities was established by the Accessible Canada Act?",
    options: [
      { id: "a", text: "Canadian Accessibility Bureau" },
      { id: "b", text: "Accessibility Standards Canada" },
      { id: "c", text: "Federal Disability Commission" },
      { id: "d", text: "National Accessibility Council" }
    ],
    answer: "b",
    category: "International Laws",
    explanation: "The Accessible Canada Act established a Chief Accessibility Officer and created accessibility standards known as 'Accessibility Standards Canada'."
  },
  {
    id: 43,
    text: "The Accessibility for Ontarians with Disabilities Act (AODA) applies to:",
    options: [
      { id: "a", text: "Only public sector organizations in Ontario" },
      { id: "b", text: "Only private sector businesses with more than 50 employees" },
      { id: "c", text: "Both public and private sectors in the Province of Ontario" },
      { id: "d", text: "All Canadian organizations doing business in Ontario" }
    ],
    answer: "c",
    category: "International Laws",
    explanation: "The AODA 'applies to every person or organization in the public and private sectors of the Province of Ontario' that meets certain criteria related to providing goods, services, facilities, employment, etc."
  },
  {
    id: 44,
    text: "In Quebec, government websites must comply with which accessibility standard?",
    options: [
      { id: "a", text: "WCAG 2.0 Level A" },
      { id: "b", text: "Standards sur l'accessibilité du Web (a modified version of WCAG 2.0, Level AA)" },
      { id: "c", text: "Accessible Canada Act standards" },
      { id: "d", text: "AODA Digital Accessibility Standards" }
    ],
    answer: "b",
    category: "International Laws",
    explanation: "Quebec government websites must comply with Standards sur l'accessibilité du Web, which is a modified version of WCAG 2.0, Level AA."
  },
  {
    id: 45,
    text: "Which of the following is NOT a federally regulated private sector covered by the Accessible Canada Act?",
    options: [
      { id: "a", text: "Banks" },
      { id: "b", text: "Retail stores" },
      { id: "c", text: "Airlines that cross provincial borders" },
      { id: "d", text: "Telecommunications companies" }
    ],
    answer: "b",
    category: "International Laws",
    explanation: "The Accessible Canada Act covers federally regulated private sectors such as banks, transportation (including airlines that cross provincial borders), broadcasting, and telecommunications. Retail stores are generally regulated at the provincial level unless they fall into one of the federally regulated categories."
  },
  {
    id: 46,
    text: "The Web Standards for the Government of Canada apply to:",
    options: [
      { id: "a", text: "All businesses operating websites in Canada" },
      { id: "b", text: "The Government of Canada only" },
      { id: "c", text: "All public sector organizations at federal, provincial, and municipal levels" },
      { id: "d", text: "All federally regulated industries" }
    ],
    answer: "b",
    category: "International Laws",
    explanation: "The Web Standards for the Government of Canada apply to the government and do not apply explicitly to the private sector or other levels of government."
  },
  {
    id: 47,
    text: "Which of the following statements about the AODA is correct?",
    options: [
      { id: "a", text: "It applies only to organizations with more than 20 employees" },
      { id: "b", text: "It applies to organizations that provide goods, services, or facilities in Ontario" },
      { id: "c", text: "It only covers digital accessibility requirements" },
      { id: "d", text: "It was established by the federal government" }
    ],
    answer: "b",
    category: "International Laws",
    explanation: "The AODA applies to organizations in Ontario that 'provide goods, services or facilities... employs persons in Ontario... offers accommodation... owns or occupies a building, structure or premises... or is engaged in a prescribed business, activity or undertaking.'"
  },
  {
    id: 48,
    text: "Who is directly affected by the Accessibility for Ontarians with Disabilities Act (AODA)?",
    options: [
      { id: "a", text: "All citizens of Canada" },
      { id: "b", text: "Every person and organization in the Province of Ontario who provides goods, services, facilities, or employment" },
      { id: "c", text: "U.S. citizens visiting the Province of Ontario" },
      { id: "d", text: "Anyone who uses the Internet" }
    ],
    answer: "b",
    category: "International Laws",
    explanation: "The AODA applies to every person and organization in the Province of Ontario who provides goods, services, facilities, or employment."
  },

  // European Accessibility Laws
  {
    id: 49,
    text: "The European Accessibility Act (EAA) will be enforceable starting on which date?",
    options: [
      { id: "a", text: "January 1, 2024" },
      { id: "b", text: "June 28, 2025" },
      { id: "c", text: "December 31, 2025" },
      { id: "d", text: "July 11, 2023" }
    ],
    answer: "b",
    category: "International Laws",
    explanation: "The European Accessibility Act will be enforceable starting on June 28, 2025, which means that customers will be able to file complaints before national courts or authorities from that date."
  },
  {
    id: 50,
    text: "Which of the following is NOT among the products covered by the European Accessibility Act (EAA)?",
    options: [
      { id: "a", text: "Smartphones and other communication devices" },
      { id: "b", text: "ATMs and payment terminals" },
      { id: "c", text: "Office furniture" },
      { id: "d", text: "E-readers" }
    ],
    answer: "c",
    category: "International Laws",
    explanation: "The European Accessibility Act covers various products including computers, smartphones, TV equipment, ATMs, payment terminals, e-readers, and ticketing machines, but office furniture is not included in the scope."
  },
  {
    id: 51,
    text: "In the United Kingdom, which act replaced the Disability Discrimination Act 1995?",
    options: [
      { id: "a", text: "The Public Sector Bodies Accessibility Regulations 2018" },
      { id: "b", text: "The Equality Act of 2010" },
      { id: "c", text: "The Web Accessibility Act of 2019" },
      { id: "d", text: "The Digital Accessibility Act of 2017" }
    ],
    answer: "b",
    category: "International Laws",
    explanation: "The Equality Act of 2010 replaced and now supersedes three laws that named specific populations, including the Disability Discrimination Act 1995, the Sex Discrimination Act 1975, and the Race Relations Act 1976."
  },
  {
    id: 52,
    text: "The European standard EN 301 549 is most similar to which United States accessibility regulation?",
    options: [
      { id: "a", text: "Americans with Disabilities Act (ADA)" },
      { id: "b", text: "Section 508 of the Rehabilitation Act" },
      { id: "c", text: "21st Century Communications and Video Accessibility Act (CVAA)" },
      { id: "d", text: "Air Carrier Access Act (ACAA)" }
    ],
    answer: "b",
    category: "International Laws",
    explanation: "The European standard EN 301 549 is similar to Section 508 in the United States. It was created to provide accessibility requirements for ICT products and services and to create equal European procurement requirements."
  },
  {
    id: 53,
    text: "Which EU directive required all public sector mobile applications to be accessible by June 23, 2021?",
    options: [
      { id: "a", text: "EU Directive 2019/882 (European Accessibility Act)" },
      { id: "b", text: "EU Directive 2016/2102" },
      { id: "c", text: "EU Directive 2003/98" },
      { id: "d", text: "EU Directive 2020/1828" }
    ],
    answer: "b",
    category: "International Laws",
    explanation: "EU Directive 2016/2102 applies to the public sector and required websites to comply by September 23, 2020, and mobile apps by June 23, 2021."
  },
  {
    id: 54,
    text: "Which of the following is a unique characteristic of the European Accessibility Act (EAA) compared to many preceding accessibility laws?",
    options: [
      { id: "a", text: "It applies to both public and private sectors" },
      { id: "b", text: "It only applies to government websites" },
      { id: "c", text: "It only covers digital services" },
      { id: "d", text: "It only applies to businesses with more than 100 employees" }
    ],
    answer: "a",
    category: "International Laws",
    explanation: "The European Accessibility Act is a landmark piece of legislation because unlike many preceding accessibility laws, it covers both the public and private sectors."
  },
  {
    id: 55,
    text: "In France, which standard must government websites comply with for accessibility?",
    options: [
      { id: "a", text: "BITV 2.0" },
      { id: "b", text: "RGAA" },
      { id: "c", text: "Standards sur l'accessibilité du Web" },
      { id: "d", text: "EN 301 549" }
    ],
    answer: "b",
    category: "International Laws",
    explanation: "French government websites and public services are required to comply with the Référentiel général d'amélioration de l'accessibilité (RGAA), which is based on WCAG."
  },
  {
    id: 56,
    text: "According to the text, by what date were all European Union member states required to transpose the European Accessibility Act into national law?",
    options: [
      { id: "a", text: "Summer of 2020" },
      { id: "b", text: "January 2023" },
      { id: "c", text: "Summer of 2022" },
      { id: "d", text: "December 2024" }
    ],
    answer: "c",
    category: "International Laws",
    explanation: "All European Union member states were required to transpose the European Accessibility Act into national law by the summer of 2022."
  },
  {
    id: 57,
    text: "Under the European Accessibility Act (EAA), which of the following is NOT listed as a service that providers must ensure is accessible?",
    options: [
      { id: "a", text: "E-commerce" },
      { id: "b", text: "Transportation services' websites and mobile services" },
      { id: "c", text: "Restaurants and dining services" },
      { id: "d", text: "Banking services" }
    ],
    answer: "c",
    category: "International Laws",
    explanation: "The European Accessibility Act requires accessibility for various services including phone services, banking services, e-commerce, transportation services' digital elements, e-books, and access to audiovisual media services, but restaurants and dining services are not specifically listed."
  },
  {
    id: 58,
    text: "In Germany, which regulation specifically addresses accessibility requirements for information technology in the public sector?",
    options: [
      { id: "a", text: "Act on Equal Opportunities for Disabled Persons (BGG)" },
      { id: "b", text: "Federal Ordinance on Barrier-Free Information Technology (BITV 2.0)" },
      { id: "c", text: "Regulation on the Accessibility Enhancement Act (BFSGV)" },
      { id: "d", text: "Act transposing Directive (EU) 2019/882" }
    ],
    answer: "b",
    category: "International Laws",
    explanation: "The Federal Ordinance on Barrier-Free Information Technology (BITV 2.0) specifically addresses the accessibility of information and services from public bodies that are made available electronically."
  },
  {
    id: 59,
    text: "Which European country was the first to introduce legislation specifically addressing web accessibility with its 'Stanca Law' in 2004?",
    options: [
      { id: "a", text: "France" },
      { id: "b", text: "Germany" },
      { id: "c", text: "Italy" },
      { id: "d", text: "Spain" }
    ],
    answer: "c",
    category: "International Laws",
    explanation: "Italy introduced Law 9 January 2004, n. 4 'Provisions to support the access of disabled people to IT tools' (Stanca Law) in 2004, requiring public body websites to be accessible to people with disabilities."
  },
  {
    id: 60,
    text: "Which parts of EN 301 549 relating to the web refer to in terms of accessibility standards?",
    options: [
      { id: "a", text: "WCAG 1.0 Level A" },
      { id: "b", text: "WCAG 2.0 Level AA" },
      { id: "c", text: "WCAG 2.1 Level AA" },
      { id: "d", text: "WCAG 3.0" }
    ],
    answer: "c",
    category: "International Laws",
    explanation: "Parts of EN 301 549 relating to the web refer to WCAG 2.1 level AA, as mentioned in the text."
  },
  {
    id: 61,
    text: "Which European mandate is similar to Section 508 in the United States?",
    options: [
      { id: "a", text: "The European Standard for Disability Equality" },
      { id: "b", text: "EU ADA - European Union Access to Disabilities Act" },
      { id: "c", text: "EN Section 508" },
      { id: "d", text: "EN 301 549: Accessibility requirements suitable for public procurement of ICT products and services in Europe" }
    ],
    answer: "d",
    category: "International Laws",
    explanation: "EN 301 549 is the European standard that is similar to Section 508 in the United States, providing accessibility requirements for ICT products and services."
  },
  {
    id: 62,
    text: "EN 301 549 is an example of which type of accessibility law?",
    options: [
      { id: "a", text: "Civil rights law" },
      { id: "b", text: "Procurement law" },
      { id: "c", text: "Industry-specific law" },
      { id: "d", text: "Administrative law" }
    ],
    answer: "b",
    category: "International Laws",
    explanation: "EN 301 549 is an example of a procurement law, requiring that accessibility be taken into account when making purchases or contracting for services."
  },

  // Global Accessibility Laws
  {
    id: 63,
    text: "In Australia, what level of WCAG compliance is required for both government and non-government websites?",
    options: [
      { id: "a", text: "WCAG 2.0 Level A" },
      { id: "b", text: "WCAG 2.0 Level AA" },
      { id: "c", text: "WCAG 2.1 Level AA" },
      { id: "d", text: "WCAG 2.1 Level AAA" }
    ],
    answer: "b",
    category: "International Laws",
    explanation: "According to Australia's accessibility requirements, all government and non-government websites need to comply with WCAG 2.0 Level AA."
  },
  {
    id: 64,
    text: "Under the Brazilian Constitution, what percentage of government posts must be held by people with disabilities?",
    options: [
      { id: "a", text: "2%" },
      { id: "b", text: "3%" },
      { id: "c", text: "5%" },
      { id: "d", text: "10%" }
    ],
    answer: "c",
    category: "International Laws",
    explanation: "The Brazilian Constitution states that 5% of government posts must be held by people with disabilities."
  },
  {
    id: 65,
    text: "According to the Brazilian Law for Inclusion of Persons with Disabilities, which of the following is NOT a requirement?",
    options: [
      { id: "a", text: "Websites must be accessible according to international best practices" },
      { id: "b", text: "Government cannot purchase inaccessible books for education" },
      { id: "c", text: "All digital content must be available in Braille" },
      { id: "d", text: "Public authorities must support the assistive technology industry" }
    ],
    answer: "c",
    category: "International Laws",
    explanation: "While the Brazilian Law requires website accessibility, accessible books, and support for assistive technology, it does not specifically mandate that all digital content must be available in Braille."
  },
  {
    id: 66,
    text: "In Japan, what standard must central and local government websites comply with?",
    options: [
      { id: "a", text: "WCAG 2.0" },
      { id: "b", text: "Japanese Industrial Standard (JIS) X 8341" },
      { id: "c", text: "WCAG 2.1" },
      { id: "d", text: "Japanese Digital Accessibility Standard (JDAS)" }
    ],
    answer: "b",
    category: "International Laws",
    explanation: "In Japan, central and local government websites must comply with Japanese Industrial Standard (JIS) X 8341, which is based on WCAG."
  },
  {
    id: 67,
    text: "Which of the following best describes New Zealand's web accessibility requirements for government websites?",
    options: [
      { id: "a", text: "Must comply with WCAG 2.0 Level A" },
      { id: "b", text: "Must comply with WCAG 2.0 Level AA" },
      { id: "c", text: "Must comply with Web Accessibility Standard 1.1 (based on WCAG 2.1) and Web Usability Standard 1.3" },
      { id: "d", text: "Must comply with the Disability Discrimination Act" }
    ],
    answer: "c",
    category: "International Laws",
    explanation: "New Zealand government websites must comply with the Web Accessibility Standard 1.1, which is based on WCAG 2.1, and the Web Usability Standard 1.3."
  },
  {
    id: 68,
    text: "Which country's law requires the government to incentivize the production and distribution of books in accessible formats?",
    options: [
      { id: "a", text: "Australia" },
      { id: "b", text: "Brazil" },
      { id: "c", text: "India" },
      { id: "d", text: "Japan" }
    ],
    answer: "b",
    category: "International Laws",
    explanation: "The Brazilian Law for Inclusion of Persons with Disabilities states that the government should incentivize the production and distribution of books in accessible formats."
  },
  {
    id: 69,
    text: "In which year did Japan establish the Act on the Elimination of Discrimination against Persons with Disabilities?",
    options: [
      { id: "a", text: "2001" },
      { id: "b", text: "2008" },
      { id: "c", text: "2013" },
      { id: "d", text: "2017" }
    ],
    answer: "c",
    category: "International Laws",
    explanation: "Japan established the Act on the Elimination of Discrimination against Persons with Disabilities in June 2013."
  },
  {
    id: 70,
    text: "What level of WCAG compliance is required for government websites in Hong Kong and India?",
    options: [
      { id: "a", text: "WCAG Level A" },
      { id: "b", text: "WCAG Level AA" },
      { id: "c", text: "WCAG Level AAA" },
      { id: "d", text: "No specific WCAG level is required" }
    ],
    answer: "b",
    category: "International Laws",
    explanation: "Both Hong Kong and India require government websites to comply with WCAG Level AA."
  },

  // Accessibility Myths and Facts
  {
    id: 71,
    text: "Which of the following is cited as evidence that most web accessibility features are invisible to users without disabilities?",
    options: [
      { id: "a", text: "Use of ARIA attributes in markup" },
      { id: "b", text: "Addition of skip navigation links" },
      { id: "c", text: "Implementation of high contrast color schemes" },
      { id: "d", text: "Simplification of content for cognitive disabilities" }
    ],
    answer: "a",
    category: "Myths and Facts",
    explanation: "ARIA (Accessible Rich Internet Application) markup makes interactive JavaScript widgets more accessible to assistive technologies without changing the visual appearance. All of the markup happens in the code and is invisible to users who don't use assistive technology."
  },
  {
    id: 72,
    text: "According to the provided content, approximately what percentage of the population has some form of disability at any given time?",
    options: [
      { id: "a", text: "5%" },
      { id: "b", text: "10%" },
      { id: "c", text: "20%" },
      { id: "d", text: "35%" }
    ],
    answer: "c",
    category: "Myths and Facts",
    explanation: "The content states that 'People with disabilities make up about 20% of the population at any given time,' though not all of these disabilities affect a person's ability to use the internet."
  },
  {
    id: 73,
    text: "Which of the following is NOT mentioned as a reason why accessibility should be considered from the beginning of a project rather than retrofitted at the end?",
    options: [
      { id: "a", text: "A last-minute approach may result in a bad user experience" },
      { id: "b", text: "Starting over is more expensive than designing with accessibility from the beginning" },
      { id: "c", text: "Accessibility requirements change too frequently to implement early" },
      { id: "d", text: "Business goals often trump accessibility goals if time runs short" }
    ],
    answer: "c",
    category: "Myths and Facts",
    explanation: "The content does not mention frequently changing requirements as a reason to delay accessibility implementation. In fact, it argues for the opposite - implementing accessibility from the beginning of the design process."
  },
   {
    id: 74,
    text: "Which of the following is comparable to accessibility in terms of being an ongoing design requirement rather than a short-term project?",
    options: [
      { id: "a", text: "Website redesigns" },
      { id: "b", text: "Security" },
      { id: "c", text: "Social media campaigns" },
      { id: "d", text: "Seasonal promotions" }
    ],
    answer: "b",
    category: "Myths and Facts",
    explanation: "The content compares accessibility to other focus areas like security or privacy, stating 'Those needs will never disappear or be phased out. They are ongoing requirements in all stages of development and QA.'"
  },
  {
    id: 75,
    text: "A web designer is concerned that making their website accessible will require sacrificing visual appeal. According to the material, this perspective represents:",
    options: [
      { id: "a", text: "A legitimate concern that must be balanced against accessibility needs" },
      { id: "b", text: "A myth, as accessible websites can be just as beautiful as inaccessible ones" },
      { id: "c", text: "A partial truth, as some accessibility features do require visual compromises" },
      { id: "d", text: "An outdated view that applied to earlier web standards but not current ones" }
    ],
    answer: "b",
    category: "Myths and Facts",
    explanation: "The material explicitly states 'It's a myth' that accessibility results in ugly designs, and that 'Designs for people with disabilities can be just as beautiful (or as ugly) as designs for anyone else.'"
  },
  {
    id: 76,
    text: "According to the content, which of the following groups also benefits from web accessibility features beyond people with permanent disabilities?",
    options: [
      { id: "a", text: "Children under the age of 13" },
      { id: "b", text: "Users with limited technical skills" },
      { id: "c", text: "People using mobile devices" },
      { id: "d", text: "Individuals in rural areas with limited internet access" }
    ],
    answer: "c",
    category: "Myths and Facts",
    explanation: "The content states that 'the benefits of accessibility extend far beyond just people with disabilities. The same principles that make a web site good for people with disabilities also make it good for people on mobile devices...'"
  },
  {
    id: 77,
    text: "In the provided text, which of the following accessibility features is identified as one that DOES alter the visual appearance of a website?",
    options: [
      { id: "a", text: "Alternative text for images" },
      { id: "b", text: "Proper heading structure" },
      { id: "c", text: "Color contrast" },
      { id: "d", text: "Language indicators" }
    ],
    answer: "c",
    category: "Myths and Facts",
    explanation: "The text specifically lists color contrast as one of the 'accessibility fixes [that] do alter the visual appearance,' noting that designers sometimes 'need to increase the contrast by changing the colors.'"
  },
  {
    id: 78,
    text: "Which of the following best represents the reality about the cost of accessibility according to the provided content?",
    options: [
      { id: "a", text: "Accessibility is always expensive regardless of when it's implemented" },
      { id: "b", text: "Accessibility is expensive only for government and financial websites" },
      { id: "c", text: "The cost is reasonable when it's planned from the beginning and compared to alternatives" },
      { id: "d", text: "The cost is negligible and should never be a consideration" }
    ],
    answer: "c",
    category: "Myths and Facts",
    explanation: "The content states that 'The Cost of Accessibility is Reasonable when Compared to the Cost of the Alternatives' and notes that starting with accessibility in mind is much more cost-effective than retrofitting."
  },
  {
    id: 79,
    text: "According to the text, which of the following is an important step for embedding accessibility into an organization's culture?",
    options: [
      { id: "a", text: "Having explicit support from the CEO and other leaders" },
      { id: "b", text: "Exclusively hiring accessibility consultants for short-term projects" },
      { id: "c", text: "Focusing accessibility efforts only on public-facing websites" },
      { id: "d", text: "Implementing accessibility only after receiving complaints" }
    ],
    answer: "a",
    category: "Myths and Facts",
    explanation: "The text states: 'Having a vision and top-level buy-in, where explicit support from the CEO and other leaders within the company is expressed, is very helpful in setting accessibility expectations within a company.'"
  },
  {
    id: 80,
    text: "Which analogy does the text use to illustrate the difficulty of adding accessibility at the end of a project?",
    options: [
      { id: "a", text: "Trying to change the foundation of a building after it's built" },
      { id: "b", text: "Adding electrical wiring and plumbing to a finished building" },
      { id: "c", text: "Painting a car after it's been assembled" },
      { id: "d", text: "Adding seeds to a garden that has already been planted" }
    ],
    answer: "b",
    category: "Myths and Facts",
    explanation: "The text uses this specific analogy: 'Imagine trying to add electrical wiring and plumbing to a building after the building is finished, and all of the interior design is in place.'"
  },

  // Accessibility as the Minimum Goal
  {
    id: 81,
    text: "According to the content, what should be considered the minimum goal when designing websites?",
    options: [
      { id: "a", text: "Meeting legal accessibility requirements" },
      { id: "b", text: "Making a website available to people with disabilities" },
      { id: "c", text: "Achieving WCAG AAA compliance" },
      { id: "d", text: "Creating a fully inclusive design" }
    ],
    answer: "b",
    category: "Accessibility Principles",
    explanation: "The text explicitly states: 'Making a web site accessible, or available, to people should be the minimum goal.' It further explains that beyond this minimum, designers should aim for usability, intuitiveness, and an enjoyable experience."
  },
  {
    id: 82,
    text: "Which of the following statements about accessibility guidelines is TRUE according to the text?",
    options: [
      { id: "a", text: "Meeting accessibility guidelines guarantees a fully accessible website" },
      { id: "b", text: "It's possible for a website to comply with guidelines yet still not be fully accessible" },
      { id: "c", text: "Accessibility guidelines cover all aspects of website usability" },
      { id: "d", text: "Guidelines focus primarily on cognitive disabilities" }
    ],
    answer: "b",
    category: "Accessibility Principles",
    explanation: "The content explicitly states: 'Can you create a design that complies fully with the accessibility guidelines, but which is not fully accessible? The answer is yes, that can happen...'"
  },
  {
    id: 83,
    text: "Which category of disability is described as being most neglected in current accessibility guidelines?",
    options: [
      { id: "a", text: "Visual disabilities" },
      { id: "b", text: "Hearing disabilities" },
      { id: "c", text: "Cognitive disabilities" },
      { id: "d", text: "Motor disabilities" }
    ],
    answer: "c",
    category: "Accessibility Principles",
    explanation: "The text states: 'The category of disability most neglected in current guidelines is cognitive disabilities, because many of the measurements of cognitive disability access include some degree of subjective judgment.'"
  },
  {
    id: 84,
    text: "According to the content, why were subjective aspects of accessibility excluded from guidelines like WCAG?",
    options: [
      { id: "a", text: "They were considered less important than objective aspects" },
      { id: "b", text: "They were too difficult to implement" },
      { id: "c", text: "They were left for future versions of the guidelines" },
      { id: "d", text: "Guidelines were written to be objectively testable" }
    ],
    answer: "d",
    category: "Accessibility Principles",
    explanation: "The text explains: 'In fact, the guidelines were written to be objectively testable, which means that all of the subjective aspects of accessibility were purposely excluded from the guidelines.'"
  },

  // 7 Principles of Universal Design
  {
    id: 85,
    text: "Who led the group of architects that developed the 7 Principles of Universal Design in 1997?",
    options: [
      { id: "a", text: "Donald Norman" },
      { id: "b", text: "Ronald Mace" },
      { id: "c", text: "Ben Shneiderman" },
      { id: "d", text: "Jakob Nielsen" }
    ],
    answer: "b",
    category: "Universal Design",
    explanation: "As stated in the text, 'A group of architects led by Ronald Mace at North Carolina State University called into question approaches to designing buildings, products, and environments' and developed the 7 principles of universal design."
  },
  {
    id: 86,
    text: "Which Universal Design principle emphasizes that a design should be useful to people with diverse abilities?",
    options: [
      { id: "a", text: "Principle One: Equitable Use" },
      { id: "b", text: "Principle Two: Flexibility in Use" },
      { id: "c", text: "Principle Three: Simple and Intuitive Use" },
      { id: "d", text: "Principle Four: Perceptible Information" }
    ],
    answer: "a",
    category: "Universal Design",
    explanation: "Principle One: Equitable Use specifically states that 'The design is useful and marketable to people with diverse abilities.'"
  },
  {
    id: 87,
    text: "According to the content, what is a notable characteristic of the 7 Principles of Universal Design that could be considered both a weakness and a strength?",
    options: [
      { id: "a", text: "They are rigid and prescriptive" },
      { id: "b", text: "They are quite subjective" },
      { id: "c", text: "They are too technical for everyday use" },
      { id: "d", text: "They are outdated for modern digital products" }
    ],
    answer: "b",
    category: "Universal Design",
    explanation: "The text states: 'As you read through these guidelines and examples, you'll probably realize that they are quite subjective. It would be difficult to write algorithms that accurately assess compliance with these guidelines. That's a weakness. But this same weakness can be turned into a strength because it allows us to think beyond the borders of restrictive guidelines...'"
  },
  {
    id: 88,
    text: "Under which principle would you find the guideline 'Provide choice in methods of use'?",
    options: [
      { id: "a", text: "Principle One: Equitable Use" },
      { id: "b", text: "Principle Two: Flexibility in Use" },
      { id: "c", text: "Principle Three: Simple and Intuitive Use" },
      { id: "d", text: "Principle Six: Low Physical Effort" }
    ],
    answer: "b",
    category: "Universal Design",
    explanation: "'Provide choice in methods of use' is specifically listed as guideline 2a under Principle Two: Flexibility in Use."
  },
  {
    id: 89,
    text: "According to the text, which principle of Universal Design is described as not applying to the web as readily as the other principles?",
    options: [
      { id: "a", text: "Principle Four: Perceptible Information" },
      { id: "b", text: "Principle Five: Tolerance for Error" },
      { id: "c", text: "Principle Six: Low Physical Effort" },
      { id: "d", text: "Principle Seven: Size and Space for Approach and Use" }
    ],
    answer: "d",
    category: "Universal Design",
    explanation: "The text states: 'This particular principle doesn't apply to the web quite so readily as the other principles do, because this principle is more relevant to hardware and physical environments than it is to virtual environments or interfaces.'"
  },
  {
    id: 90,
    text: "Which Universal Design principle focuses on minimizing unnecessary complexity and being consistent with user expectations?",
    options: [
      { id: "a", text: "Principle One: Equitable Use" },
      { id: "b", text: "Principle Two: Flexibility in Use" },
      { id: "c", text: "Principle Three: Simple and Intuitive Use" },
      { id: "d", text: "Principle Four: Perceptible Information" }
    ],
    answer: "c",
    category: "Universal Design",
    explanation: "Principle Three: Simple and Intuitive Use includes guidelines that state 'Eliminate unnecessary complexity' and 'Be consistent with user expectations and intuition.'"
  },

  // WCAG Technical Questions
  {
    id: 91,
    text: "According to WCAG guidelines, which of the following represents the threshold at which flashing content may trigger photosensitive epileptic seizures?",
    options: [
      { id: "a", text: "Content that flashes more than 2 times per second" },
      { id: "b", text: "Content that flashes more than 3 times per second" },
      { id: "c", text: "Content that flashes more than 4 times per second" },
      { id: "d", text: "Content that flashes more than 5 times per second" }
    ],
    answer: "b",
    category: "WCAG Guidelines",
    explanation: "WCAG guidelines specify that flashing content should not flash more than three times per second, as flashing at or above this frequency may trigger photosensitive epileptic seizures in susceptible individuals. This is known as the 'three flashes or below threshold' in WCAG 2.0 Success Criterion 2.3.1 (Level A)."
  },
  {
    id: 92,
    text: "Designing web sites to benefit people with disabilities:",
    options: [
      { id: "a", text: "Also benefits other users of all kinds" },
      { id: "b", text: "Helps only a small minority of people" },
      { id: "c", text: "Is extremely difficult to learn how to do, and should be left only to experienced professionals" }
    ],
    answer: "a",
    category: "Accessibility Principles",
    explanation: "Designing web sites to benefit people with disabilities also benefits other users. Inclusive design principles like clear navigation, good contrast, and keyboard functionality help all users, not just those with disabilities."
  },
  {
    id: 93,
    text: "According to the material, what is the author's final challenge to readers regarding accessibility?",
    options: [
      { id: "a", text: "To create experiences that people with disabilities actually enjoy, not just tolerate" },
      { id: "b", text: "To advocate for better accessibility laws" },
      { id: "c", text: "To focus exclusively on meeting compliance requirements" },
      { id: "d", text: "To develop tools to measure subjective accessibility criteria" }
    ],
    answer: "a",
    category: "Accessibility Principles",
    explanation: "The final paragraph states: 'Push the boundaries to create experiences that people with disabilities actually enjoy, not just experiences they merely tolerate.'"
  },
  {
    id: 94,
    text: "What is the primary goal of inclusive design according to the definition provided?",
    options: [
      { id: "a", text: "To create separate experiences for people with different abilities" },
      { id: "b", text: "To create a unified approach to design that enables multiple methods to access the same functionality" },
      { id: "c", text: "To meet minimum legal accessibility requirements" },
      { id: "d", text: "To make websites easier to navigate for the majority of users" }
    ],
    answer: "b",
    category: "Accessibility Terminology",
    explanation: "The definition states that the main goal of inclusive design is 'to create a unified approach to design that enables multiple methods to access the same functionality.'"
  },
  {
    id: 95,
    text: "How does the definition distinguish between web accessibility and inclusive design?",
    options: [
      { id: "a", text: "Web accessibility is a process, while inclusive design is an outcome" },
      { id: "b", text: "Web accessibility is an outcome, while inclusive design is a methodology" },
      { id: "c", text: "Web accessibility applies only to websites, while inclusive design applies to all products" },
      { id: "d", text: "Web accessibility is required by law, while inclusive design is optional" }
    ],
    answer: "b",
    category: "Accessibility Terminology",
    explanation: "According to the definitions, inclusive design is described as 'a design methodology,' while web accessibility refers to 'the end result' or outcome of an inclusive design process."
  },
  {
    id: 96,
    text: "Which of the following statements best describes the relationship between usability and a website's purpose?",
    options: [
      { id: "a", text: "Usability determines which users can access a website" },
      { id: "b", text: "Usability is unrelated to a website's intended purpose" },
      { id: "c", text: "A usable web design aligns with the purpose for which the website was created" },
      { id: "d", text: "Usability is more important for websites with complex functionality" }
    ],
    answer: "c",
    category: "Accessibility Terminology",
    explanation: "The definition of usability states that 'A usable web design aligns with the purpose for which the web site was created.'"
  },
  {
    id: 97,
    text: "Which of the following is NOT part of the definition of inclusive design as provided?",
    options: [
      { id: "a", text: "Accommodating a wide spectrum of abilities and disabilities" },
      { id: "b", text: "Enabling the full range of human diversity" },
      { id: "c", text: "Creating a separate design that focuses on disabilities" },
      { id: "d", text: "Creating multiple methods to access the same functionality" }
    ],
    answer: "c",
    category: "Accessibility Terminology",
    explanation: "The definition emphasizes a 'unified approach' rather than separate designs, and aims to 'enable and accommodate the full range of human diversity' rather than focusing exclusively on disabilities."
  },
  {
    id: 98,
    text: "Which guideline under Principle Four: Perceptible Information emphasizes the importance of providing information in multiple formats?",
    options: [
      { id: "a", text: "Use different modes (pictorial, verbal, tactile) for redundant presentation of essential information" },
      { id: "b", text: "Maximize 'legibility' of essential information" },
      { id: "c", text: "Differentiate elements in ways that can be described" },
      { id: "d", text: "Provide compatibility with a variety of techniques or devices" }
    ],
    answer: "a",
    category: "Universal Design",
    explanation: "This is explicitly listed as guideline 4a under Principle Four: Perceptible Information."
  },
  {
    id: 99,
    text: "What physical world example is provided to illustrate Principle Five: Tolerance for Error?",
    options: [
      { id: "a", text: "Power doors with sensors at entrances" },
      { id: "b", text: "A double-cut car key that can be inserted in either of two ways" },
      { id: "c", text: "Lever or loop handles on doors and faucets" },
      { id: "d", text: "Wide gates at subway stations" }
    ],
    answer: "b",
    category: "Universal Design",
    explanation: "The text lists 'A double-cut car key easily inserted into a recessed keyhole in either of two ways' as a physical world example of Principle Five: Tolerance for Error."
  },
  {
    id: 100,
    text: "According to the text, how were the 7 Principles of Universal Design originally intended to be applied?",
    options: [
      { id: "a", text: "To web and digital design" },
      { id: "b", text: "To architectural and industrial design" },
      { id: "c", text: "To educational curriculum design" },
      { id: "d", text: "To software development" }
    ],
    answer: "b",
    category: "Universal Design",
    explanation: "The text states: 'Though these seven principles were intended to be applied to architectural and industrial design, these principles have been a point of reference to applying universal design to other areas such as education and web design.'"
  },
  // New questions to add after question 100

  // Accessibility as the Minimum Goal
  {
    id: 101,
    text: "You can create a website that complies fully with the WCAG accessibility guidelines, but which is not fully accessible. Is this statement true or false?",
    options: [
      { id: "a", text: "True" },
      { id: "b", text: "False" }
    ],
    answer: "a",
    category: "Accessibility Principles",
    explanation: "While guidelines provide a strong foundation, merely following technical requirements doesn't guarantee a fully accessible experience. Some accessibility issues are subjective or context-dependent and may not be covered by the guidelines."
  },
  {
    id: 102,
    text: "Which of the following is an example of a subjective accessibility guideline that is not easily testable?",
    options: [
      { id: "a", text: "All images have an alt attribute" },
      { id: "b", text: "The cognitive skills required to use a web page are minimized" },
      { id: "c", text: "All form input elements have a label" },
      { id: "d", text: "The web page has a title" }
    ],
    answer: "b",
    category: "Accessibility Principles",
    explanation: "While technical requirements like alt attributes, form labels, and page titles are objectively testable, minimizing cognitive skills is subjective and can't be easily measured, making it difficult to include in formal guidelines."
  },
  {
    id: 103,
    text: "Which of the following is NOT one of the 7 Principles of Universal Design?",
    options: [
      { id: "a", text: "Equitable Use" },
      { id: "b", text: "Simple and Intuitive Use" },
      { id: "c", text: "Tolerance for Error" },
      { id: "d", text: "High Physical Effort" }
    ],
    answer: "d",
    category: "Universal Design",
    explanation: "The correct principle is 'Low Physical Effort,' not 'High Physical Effort.' The 7 Principles are: Equitable Use, Flexibility in Use, Simple and Intuitive Use, Perceptible Information, Tolerance for Error, Low Physical Effort, and Size and Space for Approach and Use."
  },
  {
    id: 104,
    text: "Which of the following statements is true?",
    options: [
      { id: "a", text: "Web accessibility happens readily without planning" },
      { id: "b", text: "As long as all website components are accessible individually, the entire user experience will always be accessible" },
      { id: "c", text: "Retrofitting an accessibility solution can solve most accessibility problems, without having to start the design from scratch" },
      { id: "d", text: "Accessibility rot in websites can occur when designers see accessibility as a one-time project, rather than an ongoing process" }
    ],
    answer: "d",
    category: "Myths and Facts",
    explanation: "Accessibility requires ongoing maintenance and consideration with each new feature or update. Viewing it as a one-time fix leads to 'accessibility rot' where an initially accessible site becomes less accessible over time as new content and features are added without maintaining accessibility standards."
  },

  // Avoid Exclusive Design Patterns
  {
    id: 105,
    text: "Which of the following is identified as the most common accessibility design failure?",
    options: [
      { id: "a", text: "Overreliance on advanced technologies" },
      { id: "b", text: "Inconsistent color choices across the site" },
      { id: "c", text: "Not designing for accessibility at all from the start" },
      { id: "d", text: "Using excessive animations and media elements" }
    ],
    answer: "c",
    category: "Accessibility Principles",
    explanation: "Many designers do not know they need to plan for accessibility in the first place, so they never integrate accessibility requirements into their design process."
  },
  {
    id: 106,
    text: "In the \"closet organizer\" analogy, what principle does a well-organized closet illustrate regarding web design?",
    options: [
      { id: "a", text: "The need to remove all design elements to reduce complexity" },
      { id: "b", text: "The importance of having content hidden until needed" },
      { id: "c", text: "The importance of thoughtful organization and planning for usability" },
      { id: "d", text: "The requirement that each page has a single heading for simplicity" }
    ],
    answer: "c",
    category: "Accessibility Principles",
    explanation: "A well-organized closet (like a well-structured site) makes it easier for everyone to find what they need. This analogy shows that planning and organization are critical for accessible, user-friendly designs."
  },
  {
    id: 107,
    text: "What is the key reason that \"designing for accessibility\" usually requires an expert on the team?",
    options: [
      { id: "a", text: "To create custom color palettes" },
      { id: "b", text: "To ensure the website is responsive on all devices" },
      { id: "c", text: "To apply specialized knowledge and best practices from the start" },
      { id: "d", text: "To reduce the number of site visitors without disabilities" }
    ],
    answer: "c",
    category: "Accessibility Principles",
    explanation: "Accessibility expertise is vital from the beginning. An accessibility specialist understands the technical and user-focused needs required to make a site truly accessible."
  },
  {
    id: 108,
    text: "Why are \"steep wheelchair ramps\" cited as an example of an ineffective accessibility design in the physical world?",
    options: [
      { id: "a", text: "Because they are required by law but rarely used" },
      { id: "b", text: "Because they only work in specific weather conditions" },
      { id: "c", text: "Because a ramp that is too steep is still inaccessible and potentially dangerous" },
      { id: "d", text: "Because they are too expensive to build" }
    ],
    answer: "c",
    category: "Accessibility Principles",
    explanation: "A ramp that is too steep fails its core purpose. In the same way, \"partial\" or \"misapplied\" accessibility features on the web can fail to accommodate users and sometimes create additional barriers."
  },
  {
    id: 109,
    text: "Which of the following is a frequent web design failure related to semantic markup?",
    options: [
      { id: "a", text: "Using <h1> through <h6> correctly for all headings" },
      { id: "b", text: "Ensuring all visual elements have high color contrast" },
      { id: "c", text: "Only using <div> and <span> tags instead of semantic elements" },
      { id: "d", text: "Building a site exclusively with server-side rendering" }
    ],
    answer: "c",
    category: "WCAG Guidelines",
    explanation: "Overusing generic <div>/<span> tags (and styling them to look like headings or buttons) prevents screen readers from recognizing proper structure or roles."
  },
  {
    id: 110,
    text: "Why is partially implementing ARIA (Accessible Rich Internet Applications) techniques often considered an \"incomplete design\" failure?",
    options: [
      { id: "a", text: "It slows down the website for all users" },
      { id: "b", text: "It creates more visually appealing widgets" },
      { id: "c", text: "It may confuse assistive technology if roles, states, and properties are not fully defined" },
      { id: "d", text: "It increases site security risks" }
    ],
    answer: "c",
    category: "WCAG Guidelines",
    explanation: "ARIA must be consistently and correctly applied. Using it incorrectly or partially can make a site more confusing for screen reader users than if no ARIA were used at all."
  },
  {
    id: 111,
    text: "Which best illustrates \"incomplete design\" in a physical-world accessibility context?",
    options: [
      { id: "a", text: "Extra street lighting on sidewalks" },
      { id: "b", text: "Clear signage at building entrances" },
      { id: "c", text: "A curb cut on one side of the street but a high curb on the median" },
      { id: "d", text: "A wheelchair ramp that is built at a 1:12 slope" }
    ],
    answer: "c",
    category: "Accessibility Principles",
    explanation: "If the curb cut is only on the sidewalk but not on the median, the wheelchair user gets stuck. Incomplete design fails when the entire user journey isn't considered."
  },
  {
    id: 112,
    text: "How might \"bad retrofitting\" appear on a website that was not initially designed for accessibility?",
    options: [
      { id: "a", text: "Replacing every image with text descriptions only" },
      { id: "b", text: "Adding a large block of ARIA attributes that have no clear purpose" },
      { id: "c", text: "Switching to an entirely new front-end framework" },
      { id: "d", text: "Aligning the design with WCAG guidelines before launch" }
    ],
    answer: "b",
    category: "Accessibility Principles",
    explanation: "In a hasty retrofit, developers sometimes add random ARIA attributes or code \"patches,\" hoping to fix accessibility. Improper use of ARIA can make the site more confusing."
  },
  {
    id: 113,
    text: "Which scenario demonstrates an \"inconvenient or stigmatizing\" design for users with disabilities on the web?",
    options: [
      { id: "a", text: "A site that allows both mouse and keyboard navigation" },
      { id: "b", text: "A text-only version hidden behind a request form for users with disabilities" },
      { id: "c", text: "A color palette that meets WCAG contrast requirements" },
      { id: "d", text: "A fully responsive mobile layout" }
    ],
    answer: "b",
    category: "Accessibility Principles",
    explanation: "Making users request a separate, often inferior \"accessible\" version stigmatizes them by singling them out and offering subpar functionality."
  },
  {
    id: 114,
    text: "What is an example of \"accessibility rot\" on the web?",
    options: [
      { id: "a", text: "Continually adding new features but testing them for accessibility" },
      { id: "b", text: "Keeping the same codebase and never adding content" },
      { id: "c", text: "Fixing accessibility bugs immediately as they arise" },
      { id: "d", text: "Adding new content and features without maintaining accessibility practices, leading to broken accessibility over time" }
    ],
    answer: "d",
    category: "Myths and Facts",
    explanation: "\"Accessibility rot\" occurs when an originally accessible site degrades because new updates fail to follow accessibility guidelines."
  },
  {
    id: 115,
    text: "Which of these best describes why a website without planned keyboard interaction is inaccessible?",
    options: [
      { id: "a", text: "All modern browsers already handle keyboard navigation automatically" },
      { id: "b", text: "Most users prefer to click instead of tab" },
      { id: "c", text: "Users with mobility impairments or those who are blind often rely on keyboard or assistive tech to navigate" },
      { id: "d", text: "Keyboard navigation only applies to mobile devices" }
    ],
    answer: "c",
    category: "Disability Categories",
    explanation: "Proper keyboard interaction is crucial for those who cannot use a mouse, including screen reader users and people with mobility impairments."
  },
  {
    id: 116,
    text: "Which of the following examples shows how \"partial solutions\" can fail people with disabilities?",
    options: [
      { id: "a", text: "Providing alt text for all images" },
      { id: "b", text: "Using headings to structure content" },
      { id: "c", text: "Adding ARIA labels but leaving focus traps in place" },
      { id: "d", text: "Making a search box easily reachable via keyboard" }
    ],
    answer: "c",
    category: "Accessibility Principles",
    explanation: "If you fix one accessibility issue (e.g., labeling) but ignore others (e.g., keyboard traps), the overall user experience can still be broken."
  },
  {
    id: 117,
    text: "What is the main risk of relying solely on \"visible best practices\" without focusing on underlying code semantics?",
    options: [
      { id: "a", text: "The site will load too quickly for some screen readers" },
      { id: "b", text: "The site might fail to be mobile responsive" },
      { id: "c", text: "Screen reader users may be unable to navigate despite a visually acceptable design" },
      { id: "d", text: "The site might be penalized by search engines" }
    ],
    answer: "c",
    category: "WCAG Guidelines",
    explanation: "Accessibility isn't just about how things look; it's also about the underlying structure that screen readers and other assistive tools rely on."
  },
  {
    id: 118,
    text: "Why can \"a little knowledge\" be especially dangerous in web accessibility?",
    options: [
      { id: "a", text: "It increases the cost of development" },
      { id: "b", text: "It reduces the site's overall performance" },
      { id: "c", text: "Developers might apply partial fixes incorrectly, creating new issues" },
      { id: "d", text: "It causes confusion about branding guidelines" }
    ],
    answer: "c",
    category: "Accessibility Principles",
    explanation: "Incomplete or incorrect use of accessibility techniques (e.g., random ARIA attributes) can break existing functionality and lead to a worse user experience."
  },
  {
    id: 119,
    text: "Which scenario best illustrates an \"inconvenient or stigmatizing\" approach in a physical environment, paralleling web accessibility issues?",
    options: [
      { id: "a", text: "Providing entrance ramps at both the main and side entrances" },
      { id: "b", text: "Asking wheelchair users to enter the building through a back alley" },
      { id: "c", text: "Creating wide hallways that accommodate wheelchairs" },
      { id: "d", text: "Building entrances without steps" }
    ],
    answer: "b",
    category: "Accessibility Principles",
    explanation: "Forcing wheelchair users to use a separate, less convenient entrance mirrors the web scenario of offering a subpar \"accessible version\" or requiring special requests."
  },
  {
    id: 120,
    text: "Why is it inadequate for a website to rely solely on \"visual cues\" (like red borders) for form errors?",
    options: [
      { id: "a", text: "Users appreciate more color variety on the site" },
      { id: "b", text: "Too many colors can confuse users with ADHD" },
      { id: "c", text: "Users who are blind or color-blind won't notice strictly visual changes" },
      { id: "d", text: "It violates standard design principles set by color guidelines" }
    ],
    answer: "c",
    category: "Disability Categories",
    explanation: "People using screen readers or those with color-blindness won't detect purely visual cues. An accessible form needs text-based or programmatic indicators too."
  },
  // === Assistive Technology ===
{
  id: 121,
  text: "Which assistive technology converts on-screen text into synthesized speech for users with visual impairments?",
  options: [
    { id: "a", text: "Screen magnifier" },
    { id: "b", text: "Refreshable Braille display" },
    { id: "c", text: "Screen reader" },
    { id: "d", text: "Voice recognition software" }
  ],
  answer: "c",
  category: "Assistive Technology",
  explanation: "Screen readers convert text to speech, enabling blind and low-vision users to consume digital content."
},
{
  id: 122,
  text: "What device allows users to read text output by a computer through raised Braille characters?",
  options: [
    { id: "a", text: "Screen reader" },
    { id: "b", text: "Screen magnifier" },
    { id: "c", text: "Refreshable Braille display" },
    { id: "d", text: "OCR scanner" }
  ],
  answer: "c",
  category: "Assistive Technology",
  explanation: "Refreshable Braille displays render on-screen text as tactile Braille cells for users who read Braille."
},
{
  id: 123,
  text: "Which technology lets users with mobility impairments interact using single-switch input?",
  options: [
    { id: "a", text: "Voice recognition" },
    { id: "b", text: "Switch scanning" },
    { id: "c", text: "Gesture control" },
    { id: "d", text: "Eye-tracking" }
  ],
  answer: "b",
  category: "Assistive Technology",
  explanation: "Switch scanning allows users to select items sequentially with a single switch input, useful for those with limited mobility."
},
{
  id: 124,
  text: "Which assistive tool uses spoken commands to control computer functions?",
  options: [
    { id: "a", text: "OCR scanner" },
    { id: "b", text: "Voice recognition software" },
    { id: "c", text: "Screen magnifier" },
    { id: "d", text: "Alternative keyboard" }
  ],
  answer: "b",
  category: "Assistive Technology",
  explanation: "Voice recognition software interprets spoken words as commands or text input, aiding users with physical disabilities."
},
{
  id: 125,
  text: "What assistive device tracks eye movement to control cursor position for users who cannot use their hands?",
  options: [
    { id: "a", text: "Eye-tracking system" },
    { id: "b", text: "Gesture sensor" },
    { id: "c", text: "Switch control" },
    { id: "d", text: "Sip-and-puff device" }
  ],
  answer: "a",
  category: "Assistive Technology",
  explanation: "Eye-tracking systems detect gaze direction to move the cursor, enabling hands-free interaction."
},
{
  id: 126,
  text: "Which feature provides text alternatives for spoken audio content in videos?",
  options: [
    { id: "a", text: "Subtitles" },
    { id: "b", text: "Closed captions" },
    { id: "c", text: "Transcripts" },
    { id: "d", text: "Audio descriptions" }
  ],
  answer: "b",
  category: "Assistive Technology",
  explanation: "Closed captions display text of dialogue and important sounds for deaf and hard-of-hearing users."
},
{
  id: 127,
  text: "An AAC device is primarily used by individuals with which type of disability?",
  options: [
    { id: "a", text: "Visual impairments" },
    { id: "b", text: "Mobility impairments" },
    { id: "c", text: "Speech disabilities" },
    { id: "d", text: "Cognitive disabilities" }
  ],
  answer: "c",
  category: "Assistive Technology",
  explanation: "Augmentative and Alternative Communication devices assist individuals with speech disabilities to communicate."
},

// === Disability Etiquette ===
{
  id: 128,
  text: "Which is best practice when you first meet a person using a wheelchair?",
  options: [
    { id: "a", text: "Pat their wheelchair" },
    { id: "b", text: "Lean on their wheelchair" },
    { id: "c", text: "Speak directly to the person at eye level" },
    { id: "d", text: "Ask if they need help before assisting" }
  ],
  answer: "d",
  category: "Disability Etiquette",
  explanation: "Always ask before assisting, rather than assuming the person needs help."
},
{
  id: 129,
  text: "What language approach is considered person-first?",
  options: [
    { id: "a", text: "Disabled person" },
    { id: "b", text: "Person with a disability" },
    { id: "c", text: "Special needs person" },
    { id: "d", text: "Handicapped individual" }
  ],
  answer: "b",
  category: "Disability Etiquette",
  explanation: "Person-first language emphasizes the person before the disability."
},
{
  id: 130,
  text: "When encountering a service dog, which should you NOT do?",
  options: [
    { id: "a", text: "Pet or distract the dog" },
    { id: "b", text: "Speak to the handler first" },
    { id: "c", text: "Respect the dog is working" },
    { id: "d", text: "Use normal voice tone" }
  ],
  answer: "a",
  category: "Disability Etiquette",
  explanation: "Service dogs are working animals; do not pet or distract them without permission."
},
{
  id: 131,
  text: "Which is correct etiquette when offering assistance to someone with a visual impairment?",
  options: [
    { id: "a", text: "Grab their arm and lead them" },
    { id: "b", text: "Yell directions from afar" },
    { id: "c", text: "Ask if assistance is needed before guiding" },
    { id: "d", text: "Assume they cannot navigate independently" }
  ],
  answer: "c",
  category: "Disability Etiquette",
  explanation: "Always ask before guiding, and let them take your arm rather than grabbing."
},
{
  id: 132,
  text: "When communicating with a Deaf individual who signs, what is appropriate?",
  options: [
    { id: "a", text: "Speak loudly if they can lip-read" },
    { id: "b", text: "Speak normally and provide pen and paper if needed" },
    { id: "c", text: "Ignore and wait for an interpreter" },
    { id: "d", text: "Shout each word clearly" }
  ],
  answer: "b",
  category: "Disability Etiquette",
  explanation: "Speak normally and offer alternative communication methods if they prefer not to use sign language."
},

// === Disability Statistics ===
{
  id: 133,
  text: "Approximately what percentage of the global population has some form of disability?",
  options: [
    { id: "a", text: "5%" },
    { id: "b", text: "10%" },
    { id: "c", text: "15%" },
    { id: "d", text: "20%" }
  ],
  answer: "c",
  category: "Disability Statistics",
  explanation: "About 15% of people worldwide live with some form of disability (WHO)."
},
{
  id: 134,
  text: "What percentage of people with disabilities experience significant activity limitations?",
  options: [
    { id: "a", text: "2%" },
    { id: "b", text: "5%" },
    { id: "c", text: "10%" },
    { id: "d", text: "15%" }
  ],
  answer: "b",
  category: "Disability Statistics",
  explanation: "Approximately 5% experience severe disability with substantial difficulties in daily activities."
},
{
  id: 135,
  text: "Among adults aged 65 and older, what is the approximate rate of mobility impairment?",
  options: [
    { id: "a", text: "10%" },
    { id: "b", text: "25%" },
    { id: "c", text: "40%" },
    { id: "d", text: "60%" }
  ],
  answer: "c",
  category: "Disability Statistics",
  explanation: "About 40% of older adults report some form of mobility impairment."
},

// === UDL Principles ===
{
  id: 136,
  text: "Which UDL principle involves presenting information in multiple formats?",
  options: [
    { id: "a", text: "Multiple Means of Engagement" },
    { id: "b", text: "Multiple Means of Representation" },
    { id: "c", text: "Multiple Means of Expression" },
    { id: "d", text: "Multiple Means of Action" }
  ],
  answer: "b",
  category: "UDL Principles",
  explanation: "Representation focuses on offering information through varied media (text, audio, visuals)."
},
{
  id: 137,
  text: "Which UDL guideline focuses on sustaining learners’ interest?",
  options: [
    { id: "a", text: "Multiple Means of Representation" },
    { id: "b", text: "Multiple Means of Action and Expression" },
    { id: "c", text: "Multiple Means of Engagement" },
    { id: "d", text: "Multiple Means of Networking" }
  ],
  answer: "c",
  category: "UDL Principles",
  explanation: "Engagement addresses how to motivate and maintain learner interest."
},
{
  id: 138,
  text: "Under UDL, which principle allows learners to demonstrate knowledge in different ways?",
  options: [
    { id: "a", text: "Multiple Means of Representation" },
    { id: "b", text: "Multiple Means of Action and Expression" },
    { id: "c", text: "Multiple Means of Engagement" },
    { id: "d", text: "Multiple Means of Collaboration" }
  ],
  answer: "b",
  category: "UDL Principles",
  explanation: "Action & Expression encourages diverse methods for learners to show understanding."
},
{
  id: 139,
  text: "How does UDL differ from general Universal Design?",
  options: [
    { id: "a", text: "UDL applies only to digital products" },
    { id: "b", text: "UDL is focused on learning environments" },
    { id: "c", text: "UDL replaces WCAG guidelines" },
    { id: "d", text: "UDL requires Braille implementation" }
  ],
  answer: "b",
  category: "UDL Principles",
  explanation: "UDL is a framework for educational settings, extending universal design to learning."
},
{
  id: 140,
  text: "Providing captions on videos is an example of which UDL guideline?",
  options: [
    { id: "a", text: "Multiple Means of Engagement" },
    { id: "b", text: "Multiple Means of Representation" },
    { id: "c", text: "Multiple Means of Action and Expression" },
    { id: "d", text: "Multiple Means of Regulation" }
  ],
  answer: "b",
  category: "UDL Principles",
  explanation: "Captions offer an alternative representation of audio content for diverse learners."
},

// === Accessibility Business Case ===
{
  id: 141,
  text: "Which benefit is a primary business case for investing in web accessibility?",
  options: [
    { id: "a", text: "Reduced page load times" },
    { id: "b", text: "Increased audience reach and market size" },
    { id: "c", text: "Simplified code base" },
    { id: "d", text: "Lower SEO rankings" }
  ],
  answer: "b",
  category: "Accessibility Business Case",
  explanation: "Accessible sites reach more users, expanding market potential."
},
{
  id: 142,
  text: "How does accessibility mitigate legal risk for organizations?",
  options: [
    { id: "a", text: "By reducing hosting costs" },
    { id: "b", text: "By lowering the chance of ADA lawsuits or compliance penalties" },
    { id: "c", text: "By eliminating the need for user testing" },
    { id: "d", text: "By increasing page weight" }
  ],
  answer: "b",
  category: "Accessibility Business Case",
  explanation: "Compliance reduces exposure to lawsuits and related financial penalties."
},
{
  id: 143,
  text: "Which SEO benefit is directly tied to accessible content?",
  options: [
    { id: "a", text: "Higher bounce rates" },
    { id: "b", text: "Better alt text indexing by search engines" },
    { id: "c", text: "Slower page render times" },
    { id: "d", text: "Increased use of tables" }
  ],
  answer: "b",
  category: "Accessibility Business Case",
  explanation: "Proper alt text improves search engine understanding and indexing of images."
},
{
  id: 144,
  text: "How does inclusive design enhance brand reputation?",
  options: [
    { id: "a", text: "By reducing brand visibility" },
    { id: "b", text: "By demonstrating corporate social responsibility and inclusivity" },
    { id: "c", text: "By limiting site features" },
    { id: "d", text: "By increasing page load times" }
  ],
  answer: "b",
  category: "Accessibility Business Case",
  explanation: "Inclusive brands are viewed positively, strengthening customer loyalty and reputation."
},
{
  id: 145,
  text: "Why is early integration of accessibility more cost-effective than retrofitting?",
  options: [
    { id: "a", text: "Early fixes avoid redesign and rework costs later" },
    { id: "b", text: "Early fixes require no testing" },
    { id: "c", text: "Early fixes reduce code complexity arbitrarily" },
    { id: "d", text: "Early fixes eliminate the need for WCAG guidelines" }
  ],
  answer: "a",
  category: "Accessibility Business Case",
  explanation: "Incorporating accessibility from the start avoids the high cost of redesigning or patching later."
},

// === Accessibility Management ===
{
  id: 146,
  text: "What is a VPAT (Voluntary Product Accessibility Template)?",
  options: [
    { id: "a", text: "A user survey for accessibility feedback" },
    { id: "b", text: "A checklist for internal UX reviews" },
    { id: "c", text: "A standardized report detailing product conformance to accessibility standards" },
    { id: "d", text: "A code library for accessibility widgets" }
  ],
  answer: "c",
  category: "Accessibility Management",
  explanation: "A VPAT documents how a product meets WCAG, Section 508, and other standards."
},
{
  id: 147,
  text: "What key element should an organizational accessibility policy include?",
  options: [
    { id: "a", text: "Only front-end development guidelines" },
    { id: "b", text: "Roles and responsibilities for maintaining accessibility" },
    { id: "c", text: "Expired legal references" },
    { id: "d", text: "Brand color palette details" }
  ],
  answer: "b",
  category: "Accessibility Management",
  explanation: "Clear roles ensure accountability for ongoing accessibility maintenance."
},
{
  id: 148,
  text: "In procurement, what must buyers consider to ensure accessible product purchasing?",
  options: [
    { id: "a", text: "Lowest price only" },
    { id: "b", text: "Product conformance to accessibility standards" },
    { id: "c", text: "Vendor brand reputation only" },
    { id: "d", text: "Delivery time only" }
  ],
  answer: "b",
  category: "Accessibility Management",
  explanation: "Accessible procurement mandates evaluating products for compliance before purchase."
},
{
  id: 149,
  text: "A level 1 accessibility maturity model organization is characterized by what?",
  options: [
    { id: "a", text: "Established accessibility governance and training" },
    { id: "b", text: "Ad hoc or no formal accessibility processes" },
    { id: "c", text: "Continuous user testing with disabilities" },
    { id: "d", text: "Integrated automated scanning in CI/CD" }
  ],
  answer: "b",
  category: "Accessibility Management",
  explanation: "Level 1 is unstructured, with no consistent accessibility efforts."
},
{
  id: 150,
  text: "What is a primary role of an accessibility governance committee?",
  options: [
    { id: "a", text: "Code minification" },
    { id: "b", text: "Overseeing policy compliance and strategic guidance" },
    { id: "c", text: "Designing brand assets" },
    { id: "d", text: "Server maintenance" }
  ],
  answer: "b",
  category: "Accessibility Management",
  explanation: "Committees set strategy, monitor compliance, and drive organizational adoption."
},

// === International Treaties ===
{
  id: 151,
  text: "What is the primary purpose of the UN Convention on the Rights of Persons with Disabilities (CRPD)?",
  options: [
    { id: "a", text: "To fund assistive technology research" },
    { id: "b", text: "To promote and protect the rights of persons with disabilities globally" },
    { id: "c", text: "To regulate EU accessibility standards" },
    { id: "d", text: "To create national accessibility laws" }
  ],
  answer: "b",
  category: "International Treaties",
  explanation: "The CRPD is a human rights treaty ensuring full and equal rights for persons with disabilities."
},
{
  id: 152,
  text: "The Marrakesh VIP Treaty facilitates what?",
  options: [
    { id: "a", text: "Global distribution of accessible books to people with print disabilities" },
    { id: "b", text: "Trade of assistive devices" },
    { id: "c", text: "Standardizing WCAG across countries" },
    { id: "d", text: "Licensing requirements for screen readers" }
  ],
  answer: "a",
  category: "International Treaties",
  explanation: "It allows import/export of copyrighted works in accessible formats for visually impaired individuals."
},
{
  id: 153,
  text: "By ratifying the CRPD, a country commits to what action?",
  options: [
    { id: "a", text: "Adopting WCAG 2.0 as national law" },
    { id: "b", text: "Reporting progress on disability rights implementation" },
    { id: "c", text: "Funding assistive tech startups" },
    { id: "d", text: "Eliminating all disability benefits" }
  ],
  answer: "b",
  category: "International Treaties",
  explanation: "CRPD ratification requires regular reports on measures taken to uphold treaty obligations."
},
{
  id: 154,
  text: "Which optional protocol allows individuals to file complaints under the CRPD?",
  options: [
    { id: "a", text: "Disability Rights Protocol" },
    { id: "b", text: "Individual Communications Protocol" },
    { id: "c", text: "Complaints Optional Protocol" },
    { id: "d", text: "Enforcement Protocol" }
  ],
  answer: "b",
  category: "International Treaties",
  explanation: "The Optional Protocol to CRPD establishes a communications procedure for individual complaints."
},
{
  id: 155,
  text: "Which body monitors implementation of the CRPD?",
  options: [
    { id: "a", text: "UN Human Rights Council" },
    { id: "b", text: "CRPD Committee" },
    { id: "c", text: "World Health Organization" },
    { id: "d", text: "ILO Committee" }
  ],
  answer: "b",
  category: "International Treaties",
  explanation: "The Committee on the Rights of Persons with Disabilities reviews state reports on CRPD implementation."
},
  // New questions added from Topics: Blindness, Low Vision, Color-Blindness, Deafblindness
  {
    id: 156,
    text: "What is the most appropriate fix when an image on a website lacks alternative text?",
    options: [
      { id: "a", text: "Increase the image's contrast" },
      { id: "b", text: "Add descriptive alternative text via the alt attribute" },
      { id: "c", text: "Convert the image to grayscale" },
      { id: "d", text: "Reduce the image size" }
    ],
    answer: "b",
    category: "WCAG Guidelines",
    explanation: "Adding descriptive alt text ensures that non-text content is accessible to users of assistive technologies."
  },
  {
    id: 157,
    text: "Which assistive feature can help blind individuals navigate physical spaces by indicating the edge of platforms or the start of staircases?",
    options: [
      { id: "a", text: "GPS-based audio guidance" },
      { id: "b", text: "Tactile ground surface indicators" },
      { id: "c", text: "Braille signage" },
      { id: "d", text: "High-contrast paint" }
    ],
    answer: "b",
    category: "Assistive Technology",
    explanation: "Tactile ground surface indicators, like raised tiles, help blind people feel their surroundings underfoot and navigate safely."
  },
  {
    id: 158,
    text: "Which assistive technology is most commonly used by people with low vision to read small on-screen text?",
    options: [
      { id: "a", text: "Screen reader" },
      { id: "b", text: "Screen magnifier" },
      { id: "c", text: "Refreshable braille display" },
      { id: "d", text: "Voice recognition software" }
    ],
    answer: "b",
    category: "Assistive Technology",
    explanation: "Screen magnifiers enlarge portions of the screen, making text and images easier to see for users with low vision."
  },
  {
    id: 159,
    text: "A user with low vision has difficulty reading light gray text on a white background. What WCAG issue does this represent?",
    options: [
      { id: "a", text: "Lack of keyboard navigation" },
      { id: "b", text: "Insufficient color contrast" },
      { id: "c", text: "Missing alt text" },
      { id: "d", text: "Non-semantic markup" }
    ],
    answer: "b",
    category: "WCAG Guidelines",
    explanation: "Low contrast between text and background makes content hard to read for users with low vision, violating WCAG contrast requirements."
  },
  {
    id: 160,
    text: "What problem can occur if a website’s layout does not support reflow or maintain content when zoomed?",
    options: [
      { id: "a", text: "The site loads too slowly" },
      { id: "b", text: "Content may be cut off and become unreadable" },
      { id: "c", text: "Screen reader compatibility increases" },
      { id: "d", text: "Forms will submit incorrectly" }
    ],
    answer: "b",
    category: "WCAG Guidelines",
    explanation: "Sites that do not reflow when zoomed can cut off or hide content, making it inaccessible for users who rely on magnification."
  },
  {
    id: 161,
    text: "Why might a self-voicing interface on a public kiosk not fully meet the interactive needs of users with low vision?",
    options: [
      { id: "a", text: "It often lacks detailed audio output capabilities" },
      { id: "b", text: "It usually cannot interact with dynamic on-screen content like a screen reader can" },
      { id: "c", text: "They are prohibitively expensive" },
      { id: "d", text: "They cannot convert text to speech" }
    ],
    answer: "b",
    category: "Assistive Technology",
    explanation: "Self-voicing interfaces mainly broadcast information and typically do not provide full interaction with dynamic content like screen readers do."
  },
  {
    id: 162,
    text: "Which form of color vision deficiency is the most prevalent?",
    options: [
      { id: "a", text: "Blue-yellow color-blindness (Tritanopia)" },
      { id: "b", text: "Red-green color-blindness" },
      { id: "c", text: "Total color blindness (Achromatopsia)" },
      { id: "d", text: "Red-black confusion" }
    ],
    answer: "b",
    category: "Disability Categories",
    explanation: "Red-green color-blindness is the most common form, affecting the ability to distinguish reds, greens, and related hues."
  },
  {
    id: 163,
    text: "Why should designers avoid using color alone to convey essential information?",
    options: [
      { id: "a", text: "Color is not supported in some browsers" },
      { id: "b", text: "Users may override or not perceive color vision distinctions" },
      { id: "c", text: "It violates semantic HTML" },
      { id: "d", text: "It only benefits keyboard users" }
    ],
    answer: "b",
    category: "WCAG Guidelines",
    explanation: "Users with color vision deficiencies or custom color settings may not perceive information conveyed strictly through color."
  },
  {
    id: 164,
    text: "What is a limitation of assistive technology for people with color-blindness?",
    options: [
      { id: "a", text: "Screen readers cannot interpret colors" },
      { id: "b", text: "Few tools exist to correct or compensate color vision deficiencies" },
      { id: "c", text: "Braille displays cannot render colors" },
      { id: "d", text: "Refreshable braille only supports text" }
    ],
    answer: "b",
    category: "Assistive Technology",
    explanation: "There are very limited assistive technologies for color-blindness, so users must often rely on design accommodations rather than tech solutions."
  },
  {
    id: 165,
    text: "Which feedback method is most suitable for notifying a deafblind user of an alert?",
    options: [
      { id: "a", text: "Audio alert" },
      { id: "b", text: "Visual flash" },
      { id: "c", text: "Haptic (vibrational) feedback" },
      { id: "d", text: "Pop-up message" }
    ],
    answer: "c",
    category: "Assistive Technology",
    explanation: "Haptic feedback (vibrations) can alert users who cannot see or hear visual/audio notifications."
  },
  {
    id: 166,
    text: "What communication method allows deafblind users to understand sign language?",
    options: [
      { id: "a", text: "Visual interpreter on screen" },
      { id: "b", text: "Captioned video" },
      { id: "c", text: "Tactile sign language interpretation" },
      { id: "d", text: "Audio description" }
    ],
    answer: "c",
    category: "Assistive Technology",
    explanation: "Tactile sign language conveys signs via touch between the interpreter’s and user’s hands, suitable for those who are deafblind."
  },
  {
    id: 167,
    text: "Which device is used to produce hard-copy braille from digital text?",
    options: [
      { id: "a", text: "Refreshable braille display" },
      { id: "b", text: "Braille embosser" },
      { id: "c", text: "Screen magnifier" },
      { id: "d", text: "OCR scanner" }
    ],
    answer: "b",
    category: "Assistive Technology",
    explanation: "Braille embossers print raised braille characters on paper, translating digital text into a tactile hard copy.."
  },
  {
  id: 168,
  text: "Which of the following is true regarding mobility disabilities?",
  options: [
    { id: "a", text: "They only occur due to aging" },
    { id: "b", text: "They are always permanent and degenerative" },
    { id: "c", text: "They may impact ambulation, dexterity, or fine motor control" },
    { id: "d", text: "They affect only lower limbs" }
  ],
  answer: "c",
  category: "Disability Types",
  explanation: "Mobility disabilities may affect the ability to walk (ambulation) and/or fine motor control. They can be congenital, acquired, permanent, temporary, or recurrent."
},
{
  id: 169,
  text: "Stephen Hawking was able to communicate using which assistive technology?",
  options: [
    { id: "a", text: "Puff and sip controller" },
    { id: "b", text: "Eye gaze tracker" },
    { id: "c", text: "Cheek sensor with predictive text software" },
    { id: "d", text: "One-handed keyboard" }
  ],
  answer: "c",
  category: "Assistive Technology",
  explanation: "Stephen Hawking used a cheek sensor and predictive text software to communicate, enabling him to write and speak via computer."
},
{
  id: 170,
  text: "Which principle is most important for web accessibility for people with motor disabilities?",
  options: [
    { id: "a", text: "Robust content" },
    { id: "b", text: "Perceivable content" },
    { id: "c", text: "Content must be operable by various input methods" },
    { id: "d", text: "Keyboard-only access is sufficient" }
  ],
  answer: "c",
  category: "WCAG Principles",
  explanation: "The key principle is Operable. Content must be accessible regardless of input method, including non-traditional assistive devices."
},
{
  id: 171,
  text: "Which of the following disabilities would be categorized as a body size or shape disability?",
  options: [
    { id: "a", text: "Multiple sclerosis" },
    { id: "b", text: "Obesity" },
    { id: "c", text: "Stroke" },
    { id: "d", text: "Cerebral palsy" }
  ],
  answer: "b",
  category: "Disability Types",
  explanation: "Obesity is categorized as a body structure disability, along with dwarfism and other conditions that affect shape or size."
},
{
  id: 172,
  text: "Which assistive device would most likely help a person with no arm function to control a wheelchair?",
  options: [
    { id: "a", text: "One-handed keyboard" },
    { id: "b", text: "Mouth stick" },
    { id: "c", text: "Puff and sip control" },
    { id: "d", text: "Expanded keyboard" }
  ],
  answer: "c",
  category: "Assistive Technology",
  explanation: "Puff and sip systems allow users to control wheelchairs or computers using air pressure changes through a straw, ideal for those with no arm mobility."
},
{
  id: 173,
  text: "Marie-France Bru was able to write emails and manage finances using what primary method of interaction?",
  options: [
    { id: "a", text: "Eye-tracking and head switch" },
    { id: "b", text: "Sip and puff controls" },
    { id: "c", text: "Custom virtual keyboards and a jaw movement sensor" },
    { id: "d", text: "Foot-operated mouse" }
  ],
  answer: "c",
  category: "Assistive Technology",
  explanation: "She used a jaw-controlled switch with scanning software and a custom on-screen keyboard to manage her digital tasks independently."
},
{
  id: 174,
  text: "Which of the following individuals used a typewriter to create detailed works of art due to limited motor control?",
  options: [
    { id: "a", text: "Marie-France Bru" },
    { id: "b", text: "Paul Smith" },
    { id: "c", text: "Christopher Reeve" },
    { id: "d", text: "Zohreh Etezad" }
  ],
  answer: "b",
  category: "Notable Individuals",
  explanation: "Paul Smith had cerebral palsy and used a typewriter to create intricate art using just a few keys due to limited motor control."
},
{
  id: 175,
  text: "Why is modern assistive technology essential for individuals like Stephen Hawking?",
  options: [
    { id: "a", text: "It allows doctors to diagnose motor diseases" },
    { id: "b", text: "It enables autonomous breathing in patients with ALS" },
    { id: "c", text: "It provides access to computers and communication previously impossible" },
    { id: "d", text: "It eliminates the need for caregivers" }
  ],
  answer: "c",
  category: "Assistive Technology",
  explanation: "Modern assistive tech enabled Hawking and others to communicate, write, and even lecture, despite severe motor limitations."
},{
  id: 176,
  text: "Which assistive technologies can help someone who cannot use a mouse due to limited hand mobility?",
  options: [
    { id: "a", text: "Screen magnifier and OCR scanner" },
    { id: "b", text: "Speech recognition software and eye tracking" },
    { id: "c", text: "Screen reader and refreshable braille display" },
    { id: "d", text: "Joystick and touchscreen" }
  ],
  answer: "b",
  category: "Assistive Technology",
  explanation: "Speech recognition software, eye tracking devices, mouth sticks, and alternative keyboards can all allow users to navigate computers without a mouse."
},
{
  id: 177,
  text: "A user with limited dexterity finds it difficult to interact with tightly grouped buttons on a touchscreen. What is the most appropriate design solution?",
  options: [
    { id: "a", text: "Add more buttons to reduce scrolling" },
    { id: "b", text: "Use hover interactions instead of click" },
    { id: "c", text: "Ensure buttons are large and well-spaced" },
    { id: "d", text: "Require double-taps for confirmation" }
  ],
  answer: "c",
  category: "ICT Accessibility",
  explanation: "Designers should ensure that touch targets are large and well-spaced to accommodate users with fine motor challenges."
},
{
  id: 178,
  text: "What is an appropriate solution for a wheelchair user who cannot use stairs to access a building entrance?",
  options: [
    { id: "a", text: "Provide a detailed map of the steps" },
    { id: "b", text: "Offer valet parking" },
    { id: "c", text: "Provide accessible ramps and parking" },
    { id: "d", text: "Install a buzzer for assistance" }
  ],
  answer: "c",
  category: "Built Environment",
  explanation: "Accessible ramps and parking allow wheelchair users to independently access buildings without needing to use stairs."
},
{
  id: 179,
  text: "A person with a mobility disability needs more time to complete online forms. Which accessibility strategy is most appropriate?",
  options: [
    { id: "a", text: "Auto-submit forms after 2 minutes" },
    { id: "b", text: "Include a progress bar on forms" },
    { id: "c", text: "Provide a way to adjust or disable time limits" },
    { id: "d", text: "Offer tooltips on all form fields" }
  ],
  answer: "c",
  category: "ICT Accessibility",
  explanation: "WCAG requires that users be given a way to adjust, extend, or turn off time limits to accommodate slower interaction speeds."
},
{
  id: 180,
  text: "What is a common barrier for people with motor disabilities in printed materials, and what is a helpful solution?",
  options: [
    { id: "a", text: "Visual contrast; use bright ink colors" },
    { id: "b", text: "Font readability; use cursive fonts" },
    { id: "c", text: "Page turning difficulty; offer digital versions" },
    { id: "d", text: "Paper weight; use heavier stock" }
  ],
  answer: "c",
  category: "Consumer Products",
  explanation: "Printed materials can be difficult to handle for people with fine motor limitations. Offering digital formats allows users to access the content with their assistive tech."
},{
  id: 181,
  text: "Which of the following best describes an intellectual disability?",
  options: [
    { id: "a", text: "Difficulty with social interactions but normal reasoning skills" },
    { id: "b", text: "High IQ but poor memory retention" },
    { id: "c", text: "Significant limitations in reasoning, learning, and adaptive behavior" },
    { id: "d", text: "Dislike of complex language or abstract ideas" }
  ],
  answer: "c",
  category: "Cognitive & Intellectual Disabilities",
  explanation: "Intellectual disabilities are characterized by significant limitations in intellectual functioning and adaptive behavior, typically diagnosed during childhood."
},
{
  id: 182,
  text: "What is a common web design barrier for users with short-term memory challenges?",
  options: [
    { id: "a", text: "Long scrolling pages with images" },
    { id: "b", text: "Multi-step forms with no progress indicators or summaries" },
    { id: "c", text: "Too many hyperlinks on the homepage" },
    { id: "d", text: "Small font size and poor color contrast" }
  ],
  answer: "b",
  category: "Cognitive & Intellectual Disabilities",
  explanation: "Users with short-term memory loss may struggle with long, multi-step processes, especially if they cannot see where they are in the process or review previous inputs."
},
{
  id: 183,
  text: "What is an effective design solution for users with cognitive overload or low frustration tolerance?",
  options: [
    { id: "a", text: "Use multiple menus with nested options" },
    { id: "b", text: "Include as many options as possible on one page" },
    { id: "c", text: "Simplify choices and present one task at a time" },
    { id: "d", text: "Rely on abstract visual metaphors" }
  ],
  answer: "c",
  category: "Cognitive & Intellectual Disabilities",
  explanation: "People with low tolerance for cognitive overload benefit from simple, straightforward interfaces with minimal choices and step-by-step navigation."
},
{
  id: 184,
  text: "Which user would most likely benefit from reducing online distractions such as auto-playing videos or flashing advertisements?",
  options: [
    { id: "a", text: "A user with hearing loss" },
    { id: "b", text: "A user with attention deficit disorder (ADHD)" },
    { id: "c", text: "A user with color blindness" },
    { id: "d", text: "A user who uses a screen reader" }
  ],
  answer: "b",
  category: "Cognitive & Intellectual Disabilities",
  explanation: "Users with ADHD or attention deficits can be easily distracted by unnecessary motion or media, making it harder for them to focus on content or tasks."
},
{
  id: 185,
  text: "A CAPTCHA requiring text input may be a barrier for users with which type of disability?",
  options: [
    { id: "a", text: "Hearing disability" },
    { id: "b", text: "Mobility disability" },
    { id: "c", text: "Cognitive or intellectual disability" },
    { id: "d", text: "Color vision deficiency" }
  ],
  answer: "c",
  category: "Cognitive & Intellectual Disabilities",
  explanation: "CAPTCHAs can be difficult for people with cognitive disabilities who may not understand the instructions, or who may struggle with problem-solving or short-term memory."
},
{
  id: 186,
  text: "Which of the following design strategies best supports users with cognitive disabilities who struggle with complex tasks and layouts?",
  options: [
    { id: "a", text: "Use animations to make the UI more engaging" },
    { id: "b", text: "Create simple, predictable, and organized interfaces" },
    { id: "c", text: "Rely on keyboard shortcuts for faster navigation" },
    { id: "d", text: "Provide advanced configuration options upfront" }
  ],
  answer: "b",
  category: "Cognitive & Intellectual Disabilities",
  explanation: "People with cognitive disabilities often benefit from consistent, simple, and organized layouts to reduce confusion and cognitive overload."
},
{
  id: 187,
  text: "How can designers support users who struggle to process complex or text-heavy content?",
  options: [
    { id: "a", text: "Use technical jargon to appear more credible" },
    { id: "b", text: "Offer more options for customization" },
    { id: "c", text: "Supplement text with visuals and use plain language" },
    { id: "d", text: "Encourage users to solve problems without assistance" }
  ],
  answer: "c",
  category: "Cognitive & Intellectual Disabilities",
  explanation: "Plain language and supportive visuals can enhance understanding for users who have difficulty processing complex or abstract written information."
},
{
  id: 188,
  text: "Which of the following assistive technologies can support users with dyslexia who experience difficulty tracking words visually?",
  options: [
    { id: "a", text: "Screen readers with word highlighting features" },
    { id: "b", text: "Braille embossers" },
    { id: "c", text: "Voice recognition software" },
    { id: "d", text: "Single switch scanning devices" }
  ],
  answer: "a",
  category: "Cognitive & Intellectual Disabilities",
  explanation: "Screen readers with highlighting features can reinforce visual tracking by helping users follow along as words are read aloud, supporting users with dyslexia."
},
{
  id: 189,
  text: "How can content designers support users with dyslexia who confuse letters such as 'b', 'd', 'p', and 'q'?",
  options: [
    { id: "a", text: "Use fonts with similar letter shapes for consistency" },
    { id: "b", text: "Add custom CAPTCHA challenges to test comprehension" },
    { id: "c", text: "Allow font customization and underline styling" },
    { id: "d", text: "Provide all content in PDF format only" }
  ],
  answer: "c",
  category: "Cognitive & Intellectual Disabilities",
  explanation: "Allowing users to customize fonts, contrast, and apply underlines can reduce visual confusion of similar letters for users with dyslexia."
},{
  id: 190,
  text: "Which of the following solutions can support users with dyscalculia who struggle with interpreting graphs or visual math data?",
  options: [
    { id: "a", text: "Providing only visual charts with minimal labels" },
    { id: "b", text: "Offering data tables or text descriptions as alternatives to graphs" },
    { id: "c", text: "Including animations to explain graphical content" },
    { id: "d", text: "Disabling all mathematical content for users with cognitive disabilities" }
  ],
  answer: "b",
  category: "Cognitive & Intellectual Disabilities",
  explanation: "Providing data in tables or with text descriptions gives users with dyscalculia or dysgraphia an accessible alternative to visual graphs and charts."
},
{
  id: 191,
  text: "What is an appropriate accommodation for users with math-related disabilities who cannot copy diagrams or figures accurately?",
  options: [
    { id: "a", text: "Require users to submit visual diagrams only" },
    { id: "b", text: "Allow users to describe diagrams verbally using speech-to-text tools" },
    { id: "c", text: "Use CAPTCHA to verify drawing skills" },
    { id: "d", text: "Avoid providing diagrams altogether" }
  ],
  answer: "b",
  category: "Cognitive & Intellectual Disabilities",
  explanation: "Speech-to-text tools allow users with dysgraphia or related disabilities to describe diagrams instead of copying them manually."
},
{
  id: 192,
  text: "Which of the following is an example of a high-tech Augmentative and Alternative Communication (AAC) solution?",
  options: [
    { id: "a", text: "Sign language" },
    { id: "b", text: "Communication board" },
    { id: "c", text: "Computer-generated voice device" },
    { id: "d", text: "Facial expressions" }
  ],
  answer: "c",
  category: "Speech and Language Disabilities",
  explanation: "High-tech AAC devices include electronic tools that produce computer-generated voices, allowing users with speech disabilities to communicate through stored or generated messages."
},
{
  id: 193,
  text: "What is an appropriate accessibility solution for someone who cannot speak during a virtual meeting?",
  options: [
    { id: "a", text: "Ask them to type quickly or leave the meeting" },
    { id: "b", text: "Use only voice-based interaction and record it" },
    { id: "c", text: "Offer text-based options like chat or email for communication" },
    { id: "d", text: "Have someone else speak for them without consent" }
  ],
  answer: "c",
  category: "Speech and Language Disabilities",
  explanation: "People with speech disabilities may not be able to use voice in real-time. Text-based communication (e.g., chat, forms, email) ensures equal access and participation."
},
{
  id: 194,
  text: "Why is it important to provide multiple input and output methods for users with speech disabilities?",
  options: [
    { id: "a", text: "Because all users prefer different fonts" },
    { id: "b", text: "Because users with speech disabilities may also have other disabilities, like hearing or motor impairments" },
    { id: "c", text: "To make websites more colorful and visually appealing" },
    { id: "d", text: "To encourage users to upgrade their assistive devices" }
  ],
  answer: "b",
  category: "Speech and Language Disabilities",
  explanation: "Speech disabilities often co-occur with other disabilities, such as motor, visual, or cognitive impairments. Multiple input/output methods ensure broader accessibility."
},
{
  id: 195,
  text: "What is the most appropriate accessibility strategy to reduce the risk of photo-epileptic seizures from digital content?",
  options: [
    { id: "a", text: "Ensure flashing does not exceed 3 times per second" },
    { id: "b", text: "Use more animation to make content engaging" },
    { id: "c", text: "Add background music to mask the effects" },
    { id: "d", text: "Increase screen brightness" }
  ],
  answer: "a",
  category: "Seizure Disorders",
  explanation: "Flashing content should not flash more than 3 times per second to reduce the risk of triggering photo-epileptic seizures."
},
{
  id: 196,
  text: "Which of the following tools can be used to detect content that may trigger seizures?",
  options: [
    { id: "a", text: "Screen reader" },
    { id: "b", text: "PEAT (Photosensitive Epilepsy Analysis Tool)" },
    { id: "c", text: "Color contrast checker" },
    { id: "d", text: "WCAG Validator" }
  ],
  answer: "b",
  category: "Seizure Disorders",
  explanation: "PEAT (Photosensitive Epilepsy Analysis Tool) helps detect seizure-triggering flashing content in videos or animations."
},
{
  id: 197,
  text: "What is one accessibility best practice for developers to prevent seizures caused by web content?",
  options: [
    { id: "a", text: "Use bright flashing animations to draw attention" },
    { id: "b", text: "Include a warning label after the flashing content" },
    { id: "c", text: "Avoid or limit flashing, blinking, or strobe effects" },
    { id: "d", text: "Encourage users to wear sunglasses" }
  ],
  answer: "c",
  category: "Seizure Disorders",
  explanation: "The best strategy is to avoid or limit flashing and strobe effects, which can trigger seizures in photosensitive users."
},
{
  id: 198,
  text: "What is the maximum number of flashes per second recommended to avoid triggering seizures in sensitive users?",
  options: [
    { id: "a", text: "1 time per second" },
    { id: "b", text: "3 times per second" },
    { id: "c", text: "5 times per second" },
    { id: "d", text: "10 times per second" }
  ],
  answer: "b",
  category: "Seizure Disorders",
  explanation: "Flashing content should not flash more than 3 times per second to reduce the risk of triggering photosensitive seizures."
},
{
  id: 199,
  text: "Which tool can developers use to analyze content for seizure risks?",
  options: [
    { id: "a", text: "VoiceOver" },
    { id: "b", text: "PEAT (Photosensitive Epilepsy Analysis Tool)" },
    { id: "c", text: "JAWS" },
    { id: "d", text: "NVDA" }
  ],
  answer: "b",
  category: "Seizure Disorders",
  explanation: "PEAT (Photosensitive Epilepsy Analysis Tool) helps detect seizure-triggering flashing or flickering in content."
},
{
  id: 200,
  text: "Why should media controls be provided for video and animation content?",
  options: [
    { id: "a", text: "To improve SEO" },
    { id: "b", text: "To allow users to personalize volume settings" },
    { id: "c", text: "To allow users to stop or disable flashing content" },
    { id: "d", text: "To load videos faster" }
  ],
  answer: "c",
  category: "Seizure Disorders",
  explanation: "Providing users with the ability to stop or disable animations helps prevent exposure to seizure-triggering stimuli."
},
{
  id: 201,
  text: "Which of the following is TRUE about photo-epileptic seizures?",
  options: [
    { id: "a", text: "They only occur in children under 12." },
    { id: "b", text: "They are always triggered by loud sounds." },
    { id: "c", text: "They can be triggered by flashing or strobe lights in digital content." },
    { id: "d", text: "They are only caused by physical trauma." }
  ],
  answer: "c",
  category: "Seizure Disorders",
  explanation: "Photo-epileptic seizures can be triggered by flashing or strobe effects in animations, videos, and digital media."
},
{
  id: 202,
  text: "What is a common accessibility accommodation for users with seizure disorders?",
  options: [
    { id: "a", text: "Provide detailed captions for all video content" },
    { id: "b", text: "Allow voice-only controls" },
    { id: "c", text: "Provide flicker-free screen settings and media warnings" },
    { id: "d", text: "Use automatic background music on web pages" }
  ],
  answer: "c",
  category: "Seizure Disorders",
  explanation: "Providing flicker-free monitors, non-glare options, and content warnings are helpful accommodations for users at risk of seizures."
},{
  id: 203,
  text: "What is the best approach when designing for people with multiple disabilities?",
  options: [
    { id: "a", text: "Provide one-size-fits-all assistive technology" },
    { id: "b", text: "Focus on their most visible disability only" },
    { id: "c", text: "Customize solutions based on the individual's unique combination of disabilities" },
    { id: "d", text: "Prioritize motor disabilities over others" }
  ],
  answer: "c",
  category: "Multiple/Complex Disabilities",
  explanation: "The best approach is to consider each person’s specific combination of disabilities and provide tailored support and accommodations."
},
{
  id: 204,
  text: "Why can it be challenging to accommodate individuals with multiple disabilities?",
  options: [
    { id: "a", text: "They rarely use technology" },
    { id: "b", text: "There is no assistive technology for them" },
    { id: "c", text: "Their combination of disabilities can create complex needs" },
    { id: "d", text: "They cannot benefit from accessibility guidelines" }
  ],
  answer: "c",
  category: "Multiple/Complex Disabilities",
  explanation: "The combination of disabilities may interact in ways that create unique and complex accessibility challenges requiring multifaceted solutions."
},
{
  id: 205,
  text: "What is one way to support communication for people with multiple disabilities?",
  options: [
    { id: "a", text: "Provide only visual cues" },
    { id: "b", text: "Rely solely on written instructions" },
    { id: "c", text: "Use augmentative and alternative communication (AAC) methods" },
    { id: "d", text: "Avoid using assistive technologies" }
  ],
  answer: "c",
  category: "Multiple/Complex Disabilities",
  explanation: "AAC methods such as sign language, picture symbols, and speech-generating devices are important for supporting communication."
},
{
  id: 206,
  text: "Which of the following is an example of an augmentative and alternative communication (AAC) method?",
  options: [
    { id: "a", text: "Text magnifier" },
    { id: "b", text: "Braille keyboard" },
    { id: "c", text: "Speech-generating device" },
    { id: "d", text: "Screen reader" }
  ],
  answer: "c",
  category: "Multiple/Complex Disabilities",
  explanation: "Speech-generating devices are a form of AAC used to assist individuals who have difficulty producing verbal speech."
},
{
  id: 207,
  text: "What is a key principle to follow when developing accessible environments for people with complex disabilities?",
  options: [
    { id: "a", text: "Use universal design principles and support both AAC and assistive technologies" },
    { id: "b", text: "Avoid combining accessibility tools to reduce complexity" },
    { id: "c", text: "Prioritize visual design aesthetics over functionality" },
    { id: "d", text: "Test accessibility with only screen reader users" }
  ],
  answer: "a",
  category: "Multiple/Complex Disabilities",
  explanation: "Supporting both AAC and assistive technologies while following accessibility standards is essential for individuals with complex needs."
},{
  id: 208,
  text: "What percentage of the global population is estimated to experience significant disability, according to the World Health Organization?",
  options: [
    { id: "a", text: "5%" },
    { id: "b", text: "10%" },
    { id: "c", text: "16%" },
    { id: "d", text: "25%" }
  ],
  answer: "c",
  category: "Incidence and Prevalence",
  explanation: "The World Health Organization estimates that 16% of the global population experiences significant disability, which equals approximately 1.3 billion people."
},
{
  id: 209,
  text: "What is a key reason disability prevalence estimates vary across sources?",
  options: [
    { id: "a", text: "Differences in assistive technology access" },
    { id: "b", text: "Differences in survey methods and definitions of disability" },
    { id: "c", text: "Differences in income levels" },
    { id: "d", text: "Differences in climate conditions" }
  ],
  answer: "b",
  category: "Incidence and Prevalence",
  explanation: "Disability prevalence estimates vary due to differences in how disability is defined and how data is collected in different studies."
},
{
  id: 210,
  text: "Which of the following statements is true regarding disability?",
  options: [
    { id: "a", text: "Disabilities only occur at birth and cannot develop later in life" },
    { id: "b", text: "Only about 1 in 100 people worldwide have a disability" },
    { id: "c", text: "Everyone is at risk of acquiring a disability" },
    { id: "d", text: "Disabilities are only physical in nature" }
  ],
  answer: "c",
  category: "Incidence and Prevalence",
  explanation: "Disability can be acquired at any time due to illness, injury, aging, or environmental factors, making everyone susceptible."
},
{
  id: 211,
  text: "Which region has been reported to have disability prevalence rates as high as 40% in some reports?",
  options: [
    { id: "a", text: "Europe" },
    { id: "b", text: "Asia" },
    { id: "c", text: "Africa" },
    { id: "d", text: "North America" }
  ],
  answer: "c",
  category: "Incidence and Prevalence",
  explanation: "Some sources report disability prevalence in Africa reaching up to 40%, especially in poorer regions."
},
{
  id: 212,
  text: "According to historical estimates, what is the approximate disability incidence in the United States?",
  options: [
    { id: "a", text: "2-5%" },
    { id: "b", text: "8-10%" },
    { id: "c", text: "12-19%" },
    { id: "d", text: "25-30%" }
  ],
  answer: "c",
  category: "Incidence and Prevalence",
  explanation: "Estimates for the disability incidence in the U.S. have ranged from 12.1% to 19% depending on the year and source."
},
{
  id: 213,
  text: "Why do global disability statistics vary widely across different sources?",
  options: [
    { id: "a", text: "All surveys are inaccurate" },
    { id: "b", text: "Disabilities are rare and hard to measure" },
    { id: "c", text: "Differences in definitions, data collection methods, and biases" },
    { id: "d", text: "Disabilities are seasonal and inconsistent" }
  ],
  answer: "c",
  category: "Disability Statistics",
  explanation: "Disability statistics vary due to differing definitions of disability, data collection methods, survey design, and political or social biases."
},
{
  id: 214,
  text: "What is one reason people may be more likely to report a disability in certain surveys?",
  options: [
    { id: "a", text: "They want to contribute to research" },
    { id: "b", text: "They enjoy filling out surveys" },
    { id: "c", text: "The survey is anonymous" },
    { id: "d", text: "The survey determines eligibility for benefits" }
  ],
  answer: "d",
  category: "Disability Statistics",
  explanation: "If reporting a disability could qualify someone for benefits, they are more likely to disclose their condition honestly."
},
{
  id: 215,
  text: "According to global estimates, how many people in the world have a disability?",
  options: [
    { id: "a", text: "10–20 million" },
    { id: "b", text: "100–300 million" },
    { id: "c", text: "700 million to 1.4 billion" },
    { id: "d", text: "5 billion" }
  ],
  answer: "c",
  category: "Disability Statistics",
  explanation: "Between 700 million to 1.4 billion people worldwide have a disability, roughly 10–20% of the global population."
},
{
  id: 216,
  text: "Which of the following is a more accurate way to ask about disability in a survey?",
  options: [
    { id: "a", text: "Do you have a disability?" },
    { id: "b", text: "Are you disabled or not?" },
    { id: "c", text: "Do you experience difficulty seeing text, even with glasses?" },
    { id: "d", text: "Are you different abled?" }
  ],
  answer: "c",
  category: "Disability Statistics",
  explanation: "More accurate surveys use specific functional questions like 'Do you experience difficulty seeing text...' rather than vague or stigmatizing language."
},
{
  id: 217,
  text: "What is one challenge in comparing disability statistics across different countries?",
  options: [
    { id: "a", text: "Disabilities don't exist in some countries" },
    { id: "b", text: "Most people lie on surveys" },
    { id: "c", text: "Surveys and definitions vary across regions" },
    { id: "d", text: "Only certain disabilities are counted worldwide" }
  ],
  answer: "c",
  category: "Disability Statistics",
  explanation: "Because countries use different definitions and data collection methods, it is difficult to make direct comparisons between their disability statistics."
},
{
  id: 218,
  text: "Why is accessibility especially important for aging populations?",
  options: [
    { id: "a", text: "Because most older adults do not use digital technologies" },
    { id: "b", text: "Because aging individuals rarely experience disabilities" },
    { id: "c", text: "Because older adults are more likely to acquire multiple disabilities as they age" },
    { id: "d", text: "Because aging populations only experience temporary impairments" }
  ],
  answer: "c",
  category: "Aging Populations",
  explanation: "Older adults are more likely to acquire multiple disabilities over time, including vision, hearing, cognitive, and mobility impairments. Accessibility helps ensure continued access to information and services."
},
{
  id: 219,
  text: "What trend is expected regarding digital technology use and aging populations?",
  options: [
    { id: "a", text: "Use of digital technology will decrease as people age" },
    { id: "b", text: "Older users will stop using technology due to accessibility issues" },
    { id: "c", text: "The market for accessible digital technologies will shrink" },
    { id: "d", text: "Technologically-savvy adults will expect to continue using digital tools even after acquiring disabilities" }
  ],
  answer: "d",
  category: "Aging Populations",
  explanation: "As more people age with lifelong exposure to digital technology, they will expect continued access — even after acquiring age-related disabilities — which increases the demand for accessible design."
},
{
  id: 220,
  text: "What percentage of individuals aged 85 and over have three or more disabilities, according to the U.S. Census Bureau?",
  options: [
    { id: "a", text: "14.7%" },
    { id: "b", text: "41.5%" },
    { id: "c", text: "27.5%" },
    { id: "d", text: "73.6%" }
  ],
  answer: "b",
  category: "Aging Populations",
  explanation: "According to the U.S. Census Bureau data (2008–2012), 41.5% of individuals aged 85 and older have three or more disabilities."
},
{
  id: 221,
  text: "Which type of disability is most prevalent among U.S. adults aged 65 and over, according to the data?",
  options: [
    { id: "a", text: "Vision" },
    { id: "b", text: "Cognitive" },
    { id: "c", text: "Ambulatory" },
    { id: "d", text: "Self-Care" }
  ],
  answer: "c",
  category: "Aging Populations",
  explanation: "Ambulatory disabilities (difficulty walking or moving around) are the most common among older adults, with 66.5% of those aged 65+ affected."
},
{
  id: 222,
  text: "What is a potential societal impact of lower education levels among people with disabilities?",
  options: [
    { id: "a", text: "They are more likely to become educators" },
    { id: "b", text: "They are more likely to own businesses" },
    { id: "c", text: "They may face limited job opportunities and become trapped in a cycle of poverty" },
    { id: "d", text: "They are more likely to avoid using assistive technology" }
  ],
  answer: "c",
  category: "Education and Disability",
  explanation: "Lower education levels can limit employment opportunities for people with disabilities, increasing the likelihood of poverty and reducing long-term economic and social mobility."
},{
  id: 223,
  text: "What is a major contributor to the high unemployment rate among people with disabilities, beyond the disability itself?",
  options: [
    { id: "a", text: "Lack of desire to work" },
    { id: "b", text: "Lack of accessible transportation" },
    { id: "c", text: "Workplace discrimination and inaccessible environments" },
    { id: "d", text: "Higher rates of retirement" }
  ],
  answer: "c",
  category: "Employment and Discrimination",
  explanation: "While some individuals are limited by health or disability, many are able and willing to work. Discrimination and inaccessible environments are major barriers to employment."
},
{
  id: 224,
  text: "Which of the following statements about people with disabilities and employment is most accurate?",
  options: [
    { id: "a", text: "Most people with disabilities are unable to work due to health limitations" },
    { id: "b", text: "People with disabilities typically choose not to participate in the workforce" },
    { id: "c", text: "A small percentage of people with disabilities are prevented from working, but the majority are capable and willing to work if given access and opportunity" },
    { id: "d", text: "Workplace discrimination has little to no impact on disability employment rates" }
  ],
  answer: "c",
  category: "Employment and Discrimination",
  explanation: "Only a minority of people with disabilities are prevented from working due to health issues. Most are capable of working if given the opportunity and accessible environments."
},
{
  id: 225,
  text: "In the United States, what was the approximate employment rate for working-age people with disabilities in 2012?",
  options: [
    { id: "a", text: "41.1%" },
    { id: "b", text: "33.5%" },
    { id: "c", text: "39.9%" },
    { id: "d", text: "50%" }
  ],
  answer: "b",
  category: "Employment Statistics",
  explanation: "According to data from 2012, about 33.5% of working-age individuals with disabilities in the U.S. were employed."
},
{
  id: 226,
  text: "Which country reported one of the highest employment rates for people with disabilities, according to the provided data?",
  options: [
    { id: "a", text: "Austria (2005)" },
    { id: "b", text: "Philippines (2005)" },
    { id: "c", text: "Canada (2006)" },
    { id: "d", text: "Republic of Korea (2003)" }
  ],
  answer: "d",
  category: "Employment Statistics",
  explanation: "The Republic of Korea reported a 70% employment rate for people with disabilities in 2003, which is one of the highest among listed countries."
},
{
  id: 227,
  text: "Which of the following countries reported a disability employment rate under 10%?",
  options: [
    { id: "a", text: "India" },
    { id: "b", text: "Argentina" },
    { id: "c", text: "Mexico" },
    { id: "d", text: "Chile" }
  ],
  answer: "b",
  category: "Employment Statistics",
  explanation: "Argentina had a reported disability employment rate of 9%, making it one of the lowest in the list."
},{
  id: 228,
  text: "Why are disabilities often more expensive for individuals and families compared to those without disabilities?",
  options: [
    { id: "a", text: "People with disabilities tend to overspend on luxury items" },
    { id: "b", text: "They are subject to higher taxes in most countries" },
    { id: "c", text: "They often require assistive technologies, home modifications, and personal care assistance" },
    { id: "d", text: "They have access to more government subsidies, which increase costs" }
  ],
  answer: "c",
  category: "Poverty and Disability",
  explanation: "Disabilities often require costly assistive technology, home modifications, and personal care—expenses that people without disabilities do not usually incur."
},
{
  id: 229,
  text: "How can poverty and disability create a cyclical relationship?",
  options: [
    { id: "a", text: "People with disabilities often earn more, leading to higher taxes" },
    { id: "b", text: "Disability can lead to poverty due to higher costs and unemployment, while poverty can increase risk of disability due to poor healthcare and sanitation" },
    { id: "c", text: "Poverty leads to higher education, which reduces disability risk" },
    { id: "d", text: "There is no link between poverty and disability" }
  ],
  answer: "b",
  category: "Poverty and Disability",
  explanation: "Disability can cause poverty due to high living costs and unemployment, while poverty can increase the risk of acquiring disabilities through poor health, sanitation, and limited medical access."
},
{
  id: 230,
  text: "According to a 2014 U.S. Senate report, what percentage of people with disabilities in the U.S. live below the poverty line?",
  options: [
    { id: "a", text: "12%" },
    { id: "b", text: "21%" },
    { id: "c", text: "30%" },
    { id: "d", text: "44%" }
  ],
  answer: "c",
  category: "Poverty and Disability",
  explanation: "The 2014 U.S. Senate report stated that about 30% of people with disabilities live below the poverty line, double the rate of the general population."
},
{
  id: 231,
  text: "What was the estimated percentage of people with disabilities living in poverty in Latin America and the Caribbean?",
  options: [
    { id: "a", text: "27%" },
    { id: "b", text: "55%" },
    { id: "c", text: "80%" },
    { id: "d", text: "35%" }
  ],
  answer: "c",
  category: "Poverty and Disability",
  explanation: "Estimates for people with disabilities living in poverty in Latin America and the Caribbean reach up to 80–82%, making them one of the most vulnerable populations."
},
{
  id: 232,
  text: "How does considering the extra expenses of disability affect poverty statistics in the UK?",
  options: [
    { id: "a", text: "It decreases the reported poverty rate" },
    { id: "b", text: "It increases the reported poverty rate to nearly 50%" },
    { id: "c", text: "It eliminates the poverty gap between disabled and non-disabled people" },
    { id: "d", text: "It has no measurable effect" }
  ],
  answer: "b",
  category: "Poverty and Disability",
  explanation: "When additional disability-related expenses are included, the poverty rate for people with disabilities in the UK jumps to 47.4%, highlighting how financial burdens increase poverty."
},{
  id: 233,
  text: "What is the most respectful way to refer to someone who uses a wheelchair?",
  options: [
    { id: "a", text: "Wheelchair-bound person" },
    { id: "b", text: "Handicapped individual" },
    { id: "c", text: "A person who uses a wheelchair" },
    { id: "d", text: "Crippled person" }
  ],
  answer: "c",
  category: "Disability Etiquette",
  explanation: "Using people-first language like 'a person who uses a wheelchair' is respectful and avoids outdated or offensive terms like 'wheelchair-bound' or 'crippled.'"
},
{
  id: 234,
  text: "How should you respond if you're unsure how to address someone with a disability?",
  options: [
    { id: "a", text: "Avoid speaking to them to prevent offense" },
    { id: "b", text: "Use medical terms to sound respectful" },
    { id: "c", text: "Ask the person their communication or language preference" },
    { id: "d", text: "Default to outdated terms to avoid sounding too casual" }
  ],
  answer: "c",
  category: "Disability Etiquette",
  explanation: "Asking for a person’s preferred language or method of communication is respectful and inclusive."
},
{
  id: 235,
  text: "Which behavior violates disability etiquette when speaking with someone with a speech disability?",
  options: [
    { id: "a", text: "Listening patiently and asking for clarification if needed" },
    { id: "b", text: "Interrupting and finishing their sentences" },
    { id: "c", text: "Maintaining natural pitch and tone" },
    { id: "d", text: "Allowing them time to speak at their own pace" }
  ],
  answer: "b",
  category: "Disability Etiquette",
  explanation: "Interrupting and finishing sentences for someone with a speech disability is disrespectful and can be disempowering."
},
{
  id: 236,
  text: "What should you do before offering assistance to someone with a disability?",
  options: [
    { id: "a", text: "Step in and help right away" },
    { id: "b", text: "Assume they need help if they’re taking longer" },
    { id: "c", text: "Ask if they would like assistance" },
    { id: "d", text: "Wait for them to ask, but don’t speak to them" }
  ],
  answer: "c",
  category: "Disability Etiquette",
  explanation: "Always ask if someone would like assistance instead of assuming they need help."
},
{
  id: 237,
  text: "Which phrase best aligns with respectful disability etiquette?",
  options: [
    { id: "a", text: "The deaf and dumb" },
    { id: "b", text: "Person who is hard of hearing" },
    { id: "c", text: "Handicapped person" },
    { id: "d", text: "Victim of hearing loss" }
  ],
  answer: "b",
  category: "Disability Etiquette",
  explanation: "'Person who is hard of hearing' uses respectful, people-first language and avoids outdated or negative terms."
},{
  id: 238,
  text: "What is the most significant benefit of accessibility for people with disabilities?",
  options: [
    { id: "a", text: "It improves a company’s SEO" },
    { id: "b", text: "It helps them gain legal protection" },
    { id: "c", text: "It makes life possible and more independent for them" },
    { id: "d", text: "It lowers their medical bills" }
  ],
  answer: "c",
  category: "Benefits of Accessible Design",
  explanation: "Accessibility makes basic tasks possible that would otherwise be impossible for people with disabilities, enhancing independence and quality of life."
},
{
  id: 239,
  text: "How does accessibility benefit businesses in terms of legal compliance?",
  options: [
    { id: "a", text: "It guarantees more website visitors" },
    { id: "b", text: "It helps them avoid lawsuits" },
    { id: "c", text: "It reduces website traffic" },
    { id: "d", text: "It eliminates the need for customer support" }
  ],
  answer: "b",
  category: "Benefits of Accessible Design",
  explanation: "Creating accessible websites helps businesses avoid lawsuits, as inaccessibility may be a legal violation in many regions."
},
{
  id: 240,
  text: "Which of the following is a business benefit of accessible design?",
  options: [
    { id: "a", text: "Lower development costs" },
    { id: "b", text: "Reduced need for mobile responsiveness" },
    { id: "c", text: "Increased compatibility across platforms and devices" },
    { id: "d", text: "Removal of customer service features" }
  ],
  answer: "c",
  category: "Benefits of Accessible Design",
  explanation: "Accessible design often results in more robust, standards-compliant websites that work well across different browsers, devices, and input methods."
},
{
  id: 241,
  text: "Which real-world feature was originally designed for accessibility but now benefits everyone?",
  options: [
    { id: "a", text: "Touchscreens" },
    { id: "b", text: "Auto-opening doors" },
    { id: "c", text: "LED lights" },
    { id: "d", text: "Stairs" }
  ],
  answer: "b",
  category: "Benefits of Accessible Design",
  explanation: "Auto-opening doors help people using wheelchairs and also benefit those carrying items or pushing strollers."
},
{
  id: 242,
  text: "Why does accessibility increase a business’s potential customer base?",
  options: [
    { id: "a", text: "Because only developers can use accessible websites" },
    { id: "b", text: "Because people with disabilities are required to shop online" },
    { id: "c", text: "Because people with disabilities have spending power and will buy if they can access the site" },
    { id: "d", text: "Because accessible websites are invitation-only" }
  ],
  answer: "c",
  category: "Benefits of Accessible Design",
  explanation: "People with disabilities are a large market segment with spending power. If they can access a business’s website, they are more likely to buy products or services."
},
{
  id: 243,
  text: "Which three senses are primarily considered when designing web content to be perceivable?",
  options: [
    { id: "a", text: "Sight, smell, touch" },
    { id: "b", text: "Sight, sound, taste" },
    { id: "c", text: "Sight, sound, touch" },
    { id: "d", text: "Touch, smell, hearing" }
  ],
  answer: "c",
  category: "WCAG Principles",
  explanation: "Web content must be perceivable through at least one biological sense. In accessibility, this typically involves sight, sound, and touch. Taste and smell are not relevant in current web experiences."
},
{
  id: 244,
  text: "Why is digital text considered the most universally accessible format?",
  options: [
    { id: "a", text: "It loads the fastest on websites" },
    { id: "b", text: "It can be converted to speech, braille, or visual text" },
    { id: "c", text: "It has a smaller file size than images" },
    { id: "d", text: "It is easier to translate into other languages" }
  ],
  answer: "b",
  category: "WCAG Principles",
  explanation: "Digital text is the most universally accessible format because it can be converted into speech for screen readers, braille for tactile reading, or displayed visually on screen."
},
{
  id: 245,
  text: "What role does ARIA play in making dynamic web content perceivable?",
  options: [
    { id: "a", text: "ARIA makes content load faster for all users" },
    { id: "b", text: "ARIA tags automatically correct spelling in screen readers" },
    { id: "c", text: "ARIA attributes allow screen readers to be notified of changes in the DOM" },
    { id: "d", text: "ARIA replaces the need for HTML elements" }
  ],
  answer: "c",
  category: "WCAG Principles",
  explanation: "ARIA (Accessible Rich Internet Applications) helps communicate changes in content or interface states to assistive technologies like screen readers, ensuring dynamic content is perceivable."
},
{
  id: 246,
  text: "Which example best illustrates a failure of perceivability on a web page?",
  options: [
    { id: "a", text: "A page uses a dark theme by default" },
    { id: "b", text: "Images do not have alternative text descriptions" },
    { id: "c", text: "The site loads slowly on mobile devices" },
    { id: "d", text: "Font sizes are consistent throughout the site" }
  ],
  answer: "b",
  category: "WCAG Principles",
  explanation: "If images lack alt text, users who are blind cannot perceive their meaning using screen readers, making the content inaccessible."
},
{
  id: 247,
  text: "Why is it important to include captions or transcripts for audio and video content?",
  options: [
    { id: "a", text: "To reduce load times" },
    { id: "b", text: "To provide SEO benefits only" },
    { id: "c", text: "To ensure that people who cannot hear can still access the information" },
    { id: "d", text: "To help designers test color contrast" }
  ],
  answer: "c",
  category: "WCAG Principles",
  explanation: "Captions and transcripts ensure that people who are deaf or hard of hearing can access audio or multimedia content, making it perceivable."
},
{
  id: 248,
  text: "What is the primary goal of operability in web accessibility?",
  options: [
    { id: "a", text: "To reduce page load times" },
    { id: "b", text: "To ensure content works with all input devices" },
    { id: "c", text: "To remove all mouse-based interactions" },
    { id: "d", text: "To increase website traffic through SEO" }
  ],
  answer: "b",
  category: "WCAG Principles - Operable",
  explanation: "Operability ensures that all features of a website function correctly regardless of the input method being used, such as keyboard, mouse, voice, or other assistive devices."
},
{
  id: 249,
  text: "Which of the following is an example of poor operability design?",
  options: [
    { id: "a", text: "A link that can be activated by pressing Enter" },
    { id: "b", text: "A modal that traps keyboard focus inside until closed" },
    { id: "c", text: "A button that only responds to mouse hover and not keyboard" },
    { id: "d", text: "A form with labeled fields" }
  ],
  answer: "c",
  category: "WCAG Principles - Operable",
  explanation: "A button that only responds to mouse hover is not operable for users relying on keyboards or touchscreens, violating device-independence."
},
{
  id: 250,
  text: "Why is keyboard accessibility considered critical for universal operability?",
  options: [
    { id: "a", text: "Because it allows for faster typing" },
    { id: "b", text: "Because most assistive technologies emulate keyboard input" },
    { id: "c", text: "Because only screen readers require it" },
    { id: "d", text: "Because touchscreens don't use keyboards" }
  ],
  answer: "b",
  category: "WCAG Principles - Operable",
  explanation: "Most assistive technologies rely on or emulate keyboard functionality, making keyboard accessibility essential for operability."
},
{
  id: 251,
  text: "What should happen to focus when a user opens and closes a modal dialog?",
  options: [
    { id: "a", text: "It should disappear entirely" },
    { id: "b", text: "It should remain on the modal's close button" },
    { id: "c", text: "It should jump to the top of the page" },
    { id: "d", text: "It should move into the modal and return to the previous element when closed" }
  ],
  answer: "d",
  category: "WCAG Principles - Operable",
  explanation: "To maintain operability, focus should enter the modal when it opens and return to the prior focus location when it closes, preventing user disorientation."
},
{
  id: 252,
  text: "What is a key technique to ensure device-independent scripting?",
  options: [
    { id: "a", text: "Use only mouse event handlers like onmouseover" },
    { id: "b", text: "Test only with voice commands" },
    { id: "c", text: "Use event handlers like onfocus and onblur instead of device-specific ones" },
    { id: "d", text: "Use JavaScript to disable keyboard navigation" }
  ],
  answer: "c",
  category: "WCAG Principles - Operable",
  explanation: "Using device-independent event handlers like onfocus and onblur allows content to be operable with various input types, unlike device-specific ones like onmouseover."
},{
  id: 253,
  text: "What is the main focus of the 'Understandable' principle in WCAG?",
  options: [
    { id: "a", text: "Ensuring content can be perceived through different senses" },
    { id: "b", text: "Making content and interfaces easier to comprehend" },
    { id: "c", text: "Providing robust backend infrastructure" },
    { id: "d", text: "Allowing users to control interface timing" }
  ],
  answer: "b",
  category: "WCAG Principles - Understandable",
  explanation: "Understandability ensures that users can comprehend the information presented and how to interact with the interface."
},
{
  id: 254,
  text: "Why is specifying the language of a web page important for accessibility?",
  options: [
    { id: "a", text: "It enables better keyboard navigation" },
    { id: "b", text: "It increases compatibility with older browsers" },
    { id: "c", text: "It helps screen readers pronounce words correctly" },
    { id: "d", text: "It automatically translates content" }
  ],
  answer: "c",
  category: "WCAG Principles - Understandable",
  explanation: "Screen readers use language settings to apply correct pronunciation rules; failing to specify language can lead to misinterpretation."
},
{
  id: 255,
  text: "Which of the following techniques improves text readability for users with cognitive or reading disabilities?",
  options: [
    { id: "a", text: "Using long paragraphs and technical language" },
    { id: "b", text: "Avoiding headings and lists to reduce clutter" },
    { id: "c", text: "Simplifying vocabulary and breaking up text with headings and lists" },
    { id: "d", text: "Center-aligning all content to improve focus" }
  ],
  answer: "c",
  category: "WCAG Principles - Understandable",
  explanation: "Simplified vocabulary, shorter sentences, and organized content with lists/headings help improve comprehension for many users."
},
{
  id: 256,
  text: "Which user group benefits most from avoiding culturally-specific jargon and slang in content?",
  options: [
    { id: "a", text: "Search engine crawlers" },
    { id: "b", text: "People using screen magnifiers" },
    { id: "c", text: "People with cognitive disabilities" },
    { id: "d", text: "Keyboard-only users" }
  ],
  answer: "c",
  category: "WCAG Principles - Understandable",
  explanation: "Cultural jargon and complex concepts can confuse users with cognitive disabilities or limited cultural knowledge."
},
{
  id: 257,
  text: "What is a benefit of offering supplemental formats such as audio, video, or images?",
  options: [
    { id: "a", text: "They eliminate the need for alt text" },
    { id: "b", text: "They help users who cannot read at all access content" },
    { id: "c", text: "They increase file sizes unnecessarily" },
    { id: "d", text: "They provide entertainment for users" }
  ],
  answer: "b",
  category: "WCAG Principles - Understandable",
  explanation: "People who can't process text may benefit from alternate formats like images, audio, or video to understand content."
},
{
  id: 258,
  text: "Why should websites maintain consistent layout and navigation across pages?",
  options: [
    { id: "a", text: "It reduces server requests" },
    { id: "b", text: "It improves load times" },
    { id: "c", text: "It helps users predict and understand how to use the interface" },
    { id: "d", text: "It allows more creative design choices" }
  ],
  answer: "c",
  category: "WCAG Principles - Understandable",
  explanation: "Consistency and predictability reduce cognitive load and help users understand how to navigate and interact with content."
},
{
  id: 259,
  text: "How can developers help users avoid or correct errors when filling out forms?",
  options: [
    { id: "a", text: "Allow form submission without validation" },
    { id: "b", text: "Use complex password rules without explanation" },
    { id: "c", text: "Provide clear instructions, hints, and contextual help" },
    { id: "d", text: "Require only visual CAPTCHA verification" }
  ],
  answer: "c",
  category: "WCAG Principles - Understandable",
  explanation: "Providing instructions and context helps users understand what's expected, reducing errors and frustration."
},
{
  id: 260,
  text: "How should confirmation or error messages be handled for screen reader users?",
  options: [
    { id: "a", text: "Display them in a separate section without alerts" },
    { id: "b", text: "Make the user search for them after submission" },
    { id: "c", text: "Ensure the messages are read aloud immediately using focus or alerts" },
    { id: "d", text: "Use only visual cues like color or icons" }
  ],
  answer: "c",
  category: "WCAG Principles - Understandable",
  explanation: "Feedback messages should be announced immediately using ARIA alerts or focus management to ensure screen reader users hear them."
},

{
  id: 261,
  text: "What is the main goal of the 'Robust' principle in WCAG?",
  options: [
    { id: "a", text: "To simplify content for users with cognitive disabilities" },
    { id: "b", text: "To ensure compatibility with a wide range of user agents and assistive technologies" },
    { id: "c", text: "To optimize visual layout for all screen sizes" },
    { id: "d", text: "To ensure fast load times on all networks" }
  ],
  answer: "b",
  category: "WCAG Principles - Robust",
  explanation: "The Robust principle ensures content can be reliably interpreted by a wide variety of current and future user agents, including assistive technologies."
},
{
  id: 262,
  text: "Why is it important to validate HTML, CSS, and JavaScript code when developing for accessibility?",
  options: [
    { id: "a", text: "Validation guarantees complete accessibility" },
    { id: "b", text: "Invalid code always breaks screen readers" },
    { id: "c", text: "Validation helps eliminate parsing errors across user agents" },
    { id: "d", text: "Only validated code is allowed in accessibility audits" }
  ],
  answer: "c",
  category: "WCAG Principles - Robust",
  explanation: "While validation doesn't guarantee accessibility, it helps reduce the likelihood of compatibility issues across different browsers and assistive technologies."
},
{
  id: 263,
  text: "Which of the following best supports robustness in a dynamic web application?",
  options: [
    { id: "a", text: "Embedding styles directly into HTML elements" },
    { id: "b", text: "Using JavaScript-only custom components without ARIA" },
    { id: "c", text: "Using ARIA attributes to convey role, state, and name" },
    { id: "d", text: "Avoiding semantic HTML tags to allow for more flexibility" }
  ],
  answer: "c",
  category: "WCAG Principles - Robust",
  explanation: "ARIA attributes like `aria-expanded` or `aria-selected` are essential for ensuring assistive technologies can understand dynamic content."
},
{
  id: 264,
  text: "Which ARIA attribute informs a screen reader that a component can be expanded or collapsed?",
  options: [
    { id: "a", text: "aria-role" },
    { id: "b", text: "aria-label" },
    { id: "c", text: "aria-expanded" },
    { id: "d", text: "aria-live" }
  ],
  answer: "c",
  category: "WCAG Principles - Robust",
  explanation: "`aria-expanded` communicates the state of expandable content (true or false) and must be updated dynamically as the state changes."
},
{
  id: 265,
  text: "Why is it not always feasible to support all combinations of user agents and assistive technologies?",
  options: [
    { id: "a", text: "Because users with disabilities only use modern software" },
    { id: "b", text: "Because some combinations are too robust for accessibility needs" },
    { id: "c", text: "Because there are too many combinations and some aren't advanced enough to support accessibility features" },
    { id: "d", text: "Because assistive technologies all behave the same" }
  ],
  answer: "c",
  category: "WCAG Principles - Robust",
  explanation: "There are countless combinations of browsers, platforms, and assistive technologies — not all of them are capable of supporting modern accessibility standards."
},
{
  id: 266,
  text: "What is the relationship between valid markup and accessibility?",
  options: [
    { id: "a", text: "They are always the same thing" },
    { id: "b", text: "Valid markup guarantees an accessible experience" },
    { id: "c", text: "Valid markup is unnecessary for robust content" },
    { id: "d", text: "Valid markup helps but does not guarantee accessibility" }
  ],
  answer: "d",
  category: "WCAG Principles - Robust",
  explanation: "While valid code helps improve compatibility and robustness, it does not automatically ensure content is accessible to users with disabilities."
},
{
  id: 267,
  text: "What does ARIA stand for?",
  options: [
    { id: "a", text: "Automated Rich Interactive Accessibility" },
    { id: "b", text: "Accessible Rich Internet Applications" },
    { id: "c", text: "Advanced Readable Internet Architecture" },
    { id: "d", text: "Accessible Rendering Integration API" }
  ],
  answer: "b",
  category: "WCAG Principles - Robust",
  explanation: "ARIA stands for Accessible Rich Internet Applications and provides tools to improve accessibility of dynamic web content and user interface components."
},
{
  id: 268,
  text: "How should dynamic ARIA properties be managed?",
  options: [
    { id: "a", text: "Set once during page load and left unchanged" },
    { id: "b", text: "Only used in static content" },
    { id: "c", text: "Updated dynamically with JavaScript to reflect state changes" },
    { id: "d", text: "Avoided entirely for better compatibility" }
  ],
  answer: "c",
  category: "WCAG Principles - Robust",
  explanation: "ARIA properties such as `aria-expanded` and `aria-selected` must be updated with JavaScript when the state of components changes to ensure screen readers get accurate information."
},

{
  id: 269,
  text: "What is the primary goal of Universal Design?",
  options: [
    { id: "a", text: "To create content for blind users" },
    { id: "b", text: "To reduce the cost of accommodations" },
    { id: "c", text: "To create products usable by as many people as possible" },
    { id: "d", text: "To eliminate the need for alt text" }
  ],
  answer: "c",
  category: "Universal Design",
  explanation: "Universal Design focuses on making products and environments usable by all people, to the greatest extent possible, without the need for adaptation or specialized design."
},
{
  id: 270,
  text: "How does universal design differ from providing accommodations?",
  options: [
    { id: "a", text: "Universal design is only for people with visual disabilities" },
    { id: "b", text: "Universal design is proactive; accommodations are reactive" },
    { id: "c", text: "Accommodations are proactive; universal design is reactive" },
    { id: "d", text: "Universal design is only for physical environments" }
  ],
  answer: "b",
  category: "Universal Design",
  explanation: "Universal design is a proactive approach that benefits everyone, while accommodations are a reactive approach meant to address individual needs after the fact."
},
{
  id: 271,
  text: "Which of the following best describes the benefit of universal design?",
  options: [
    { id: "a", text: "It avoids having to follow accessibility laws" },
    { id: "b", text: "It helps only users with disabilities" },
    { id: "c", text: "It improves usability for all users, regardless of ability" },
    { id: "d", text: "It is cheaper than regular design" }
  ],
  answer: "c",
  category: "Universal Design",
  explanation: "Universal Design enhances usability for a broad range of users, including people with and without disabilities."
},
{
  id: 272,
  text: "Why is providing alternative (alt) text important for images on the web?",
  options: [
    { id: "a", text: "It boosts SEO rankings" },
    { id: "b", text: "It reduces image loading time" },
    { id: "c", text: "It allows screen reader users to understand image content" },
    { id: "d", text: "It changes the image’s resolution" }
  ],
  answer: "c",
  category: "Web Accessibility",
  explanation: "Alt text provides a text alternative for screen readers, making image content accessible to users who are blind or visually impaired."
},
{
  id: 273,
  text: "What happens if alt text is missing from an image?",
  options: [
    { id: "a", text: "Screen readers describe the image accurately" },
    { id: "b", text: "Screen readers skip the image or read the file name" },
    { id: "c", text: "The image loads faster" },
    { id: "d", text: "It disables keyboard navigation" }
  ],
  answer: "b",
  category: "Web Accessibility",
  explanation: "Without alt text, screen readers will either skip the image or attempt to read its file name or link destination, which may not be meaningful."
},
  {
    id: 273,
    text: "Why are proper heading structures (<h1> through <h6>) important for screen reader users?",
    options: [
      { id: "a", text: "They add visual flair to a page" },
      { id: "b", text: "They make pages load faster" },
      { id: "c", text: "They allow screen readers to navigate and understand page structure efficiently" },
      { id: "d", text: "They increase font size automatically" }
    ],
    answer: "c",
    category: "Headings",
    explanation: "Screen readers allow users to navigate from heading to heading, which makes it easier to skim and understand content structure. This only works with real HTML heading tags."
  },
  {
    id: 274,
    text: "What is the purpose of using a logical tab order for keyboard navigation?",
    options: [
      { id: "a", text: "To allow mouse users to navigate more easily" },
      { id: "b", text: "To ensure users with visual impairments can find the scrollbar" },
      { id: "c", text: "To ensure that focus moves through the page in a meaningful, predictable way" },
      { id: "d", text: "To increase loading time for assistive technology" }
    ],
    answer: "c",
    category: "Keyboard Accessibility",
    explanation: "A logical tab order ensures that users can navigate the page using a keyboard in a way that reflects the intended reading and interaction order."
  },
  {
    id: 275,
    text: "Which CSS property is often misused, causing issues for sighted keyboard users?",
    options: [
      { id: "a", text: "display: block" },
      { id: "b", text: "outline: none" },
      { id: "c", text: "margin: auto" },
      { id: "d", text: "z-index: 999" }
    ],
    answer: "b",
    category: "Keyboard Accessibility",
    explanation: "Using 'outline: none' removes the visible focus indicator, making it hard for sighted keyboard users to track where they are on the page."
  },
  {
    id: 276,
    text: "What is one key benefit of marking up data tables with the <th> element and proper scope attributes?",
    options: [
      { id: "a", text: "It improves SEO ranking" },
      { id: "b", text: "It enhances screen reader users’ ability to understand cell context" },
      { id: "c", text: "It makes the table sortable by default" },
      { id: "d", text: "It allows CSS to apply background colors automatically" }
    ],
    answer: "b",
    category: "Tables",
    explanation: "When data cells are associated with header cells using <th> and 'scope', screen readers can provide context, such as the row and column headers, when reading each cell."
  },
  {
    id: 277,
    text: "Why is keyboard accessibility critical for web components?",
    options: [
      { id: "a", text: "Because many users prefer the keyboard to avoid mouse fatigue" },
      { id: "b", text: "Because keyboards are faster than mice" },
      { id: "c", text: "Because some users cannot use a mouse due to motor or vision impairments" },
      { id: "d", text: "Because it’s required to use arrow keys on all websites" }
    ],
    answer: "c",
    category: "Keyboard Accessibility",
    explanation: "Users with motor or visual disabilities may rely exclusively on the keyboard, so all functionality must be operable without a mouse."
  },  {
    id: 278,
    text: "What is the most effective way to ensure a form input is associated with its label for screen reader users?",
    options: [
      { id: "a", text: "Place the label next to the input visually" },
      { id: "b", text: "Use placeholder text inside the input" },
      { id: "c", text: "Use a <label> element with a 'for' attribute that matches the input's 'id'" },
      { id: "d", text: "Use a tooltip" }
    ],
    answer: "c",
    category: "Forms",
    explanation: "The <label> element with a matching 'for' attribute ensures screen readers can associate the label with the form field properly."
  },
  {
    id: 279,
    text: "Why is relying only on visual placement of labels not sufficient for accessibility?",
    options: [
      { id: "a", text: "It doesn’t help mobile users" },
      { id: "b", text: "It creates visual clutter" },
      { id: "c", text: "Screen reader users may not be able to determine which label goes with which input" },
      { id: "d", text: "It causes errors in JavaScript" }
    ],
    answer: "c",
    category: "Forms",
    explanation: "Without explicit markup like the <label> element, screen readers may not correctly associate inputs with their labels, making the form unusable for non-visual users."
  },
  {
    id: 280,
    text: "What does ARIA allow developers to do in web applications?",
    options: [
      { id: "a", text: "Increase CSS animation speed" },
      { id: "b", text: "Add hover tooltips" },
      { id: "c", text: "Define roles, states, and properties of UI elements to assistive technologies" },
      { id: "d", text: "Create secure logins" }
    ],
    answer: "c",
    category: "ARIA",
    explanation: "ARIA (Accessible Rich Internet Applications) is a WAI specification that enables developers to define accessibility-related information like roles, states, and properties of elements that assistive technologies can understand."
  },
  {
    id: 281,
    text: "What is one important aspect of using ARIA correctly?",
    options: [
      { id: "a", text: "Use as many ARIA attributes as possible for maximum compatibility" },
      { id: "b", text: "Avoid native HTML elements when using ARIA" },
      { id: "c", text: "Update ARIA attributes dynamically based on user interaction" },
      { id: "d", text: "ARIA works only on mobile devices" }
    ],
    answer: "c",
    category: "ARIA",
    explanation: "ARIA attributes such as aria-expanded and aria-checked must be updated dynamically when the state of the element changes, or they can mislead screen reader users."
  },
  {
    id: 282,
    text: "What problem can occur when JavaScript changes content dynamically without managing keyboard focus?",
    options: [
      { id: "a", text: "The browser will crash" },
      { id: "b", text: "Keyboard users may lose their place or be unable to reach the new content" },
      { id: "c", text: "JavaScript will not execute correctly" },
      { id: "d", text: "ARIA attributes will disappear" }
    ],
    answer: "b",
    category: "Keyboard Focus",
    explanation: "If focus is not managed properly during dynamic updates, keyboard-only users (including screen reader users) may lose their position or be unaware that new content was added."
  },
  {
    id: 283,
    text: "What is a 'tagged PDF'?",
    options: [
      { id: "a", text: "A PDF with DRM protection" },
      { id: "b", text: "A PDF that includes semantic and structural markup for accessibility" },
      { id: "c", text: "A PDF created using AI tools" },
      { id: "d", text: "A PDF with bookmarks and thumbnails" }
    ],
    answer: "b",
    category: "PDF Accessibility",
    explanation: "Tagged PDFs include structure such as headings, lists, tables, and alternative text, allowing assistive technologies to interpret the content properly."
  },
  {
    id: 284,
    text: "Which tool is required to add accessibility tags and remediate a PDF file?",
    options: [
      { id: "a", text: "Adobe Reader" },
      { id: "b", text: "Microsoft Edge" },
      { id: "c", text: "Acrobat Pro" },
      { id: "d", text: "Preview on Mac" }
    ],
    answer: "c",
    category: "PDF Accessibility",
    explanation: "Adobe Acrobat Pro is the tool that allows users to add or edit accessibility tags, reading order, and other necessary metadata to make PDFs accessible."
  },
  {
    id: 285,
    text: "Why should developers prefer native HTML elements over custom JavaScript components when possible?",
    options: [
      { id: "a", text: "They are easier to style" },
      { id: "b", text: "They are more secure" },
      { id: "c", text: "They are accessible by default and require less effort to implement accessibly" },
      { id: "d", text: "They require no JavaScript" }
    ],
    answer: "c",
    category: "ARIA / JavaScript Accessibility",
    explanation: "Native HTML elements like buttons, links, and inputs are accessible by default, meaning they already support keyboard navigation and screen reader interaction."
  },  {
    id: 287,
    text: "What is the core idea behind universal design in the physical world?",
    options: [
      { id: "a", text: "Creating separate environments for people with disabilities" },
      { id: "b", text: "Designing for the average user to maximize efficiency" },
      { id: "c", text: "Designing environments and products that are usable by all people, to the greatest extent possible, without the need for adaptation" },
      { id: "d", text: "Relying on personal assistants to help people navigate physical spaces" }
    ],
    answer: "c",
    category: "Universal Design",
    explanation: "Universal design aims to create products and environments that are usable by all people, to the greatest extent possible, without the need for specialized adaptations."
  },
  {
    id: 288,
    text: "Who led the group that developed the Seven Principles of Universal Design?",
    options: [
      { id: "a", text: "Tim Berners-Lee" },
      { id: "b", text: "Ronald Mace" },
      { id: "c", text: "Sheryl Burgstahler" },
      { id: "d", text: "James Thatcher" }
    ],
    answer: "b",
    category: "Universal Design",
    explanation: "Ronald Mace and his team at North Carolina State University developed the Seven Principles of Universal Design in 1997."
  },
  {
    id: 289,
    text: "Which universal design principle emphasizes making usage clear regardless of a user's background or experience?",
    options: [
      { id: "a", text: "Simple and Intuitive Use" },
      { id: "b", text: "Perceptible Information" },
      { id: "c", text: "Equitable Use" },
      { id: "d", text: "Flexibility in Use" }
    ],
    answer: "a",
    category: "Universal Design",
    explanation: "The principle of Simple and Intuitive Use ensures that the design is easy to understand regardless of the user's experience, knowledge, language skills, or concentration level."
  },
  {
    id: 290,
    text: "Which principle of universal design addresses making information perceivable regardless of the user's sensory abilities?",
    options: [
      { id: "a", text: "Equitable Use" },
      { id: "b", text: "Tolerance for Error" },
      { id: "c", text: "Perceptible Information" },
      { id: "d", text: "Low Physical Effort" }
    ],
    answer: "c",
    category: "Universal Design",
    explanation: "Perceptible Information refers to presenting information effectively regardless of the user's sensory abilities, using multiple modes (e.g., visual, verbal, tactile)."
  },
  {
    id: 291,
    text: "What universal design principle is demonstrated by reducing physical effort required to use a product or environment?",
    options: [
      { id: "a", text: "Size and Space for Approach and Use" },
      { id: "b", text: "Low Physical Effort" },
      { id: "c", text: "Flexibility in Use" },
      { id: "d", text: "Tolerance for Error" }
    ],
    answer: "b",
    category: "Universal Design",
    explanation: "Low Physical Effort ensures that products and environments can be used efficiently and comfortably with minimal fatigue."
  },
  {
    id: 292,
    text: "Which of the following is NOT one of the Seven Principles of Universal Design?",
    options: [
      { id: "a", text: "Flexibility in Use" },
      { id: "b", text: "Consistency and Standards" },
      { id: "c", text: "Tolerance for Error" },
      { id: "d", text: "Equitable Use" }
    ],
    answer: "b",
    category: "Universal Design",
    explanation: "'Consistency and Standards' is a heuristic for usability, not one of the official Seven Principles of Universal Design."
  },
  {
    id: 293,
    text: "Which example best illustrates the principle of 'Equitable Use'?",
    options: [
      { id: "a", text: "A wheelchair-accessible entrance located at the back of a building" },
      { id: "b", text: "A door with an automatic opener that everyone uses" },
      { id: "c", text: "Braille signage placed in a separate hallway" },
      { id: "d", text: "Custom software installed only for users with disabilities" }
    ],
    answer: "b",
    category: "Universal Design",
    explanation: "Equitable Use promotes designs that are useful and marketable to people with diverse abilities, ideally allowing everyone to use the same design in the same way."
  },
  {
    id: 294,
    text: "Gallaudet University's campus design includes wide hallways and semi-circular seating. What principle of universal design do these exemplify?",
    options: [
      { id: "a", text: "Flexibility in Use" },
      { id: "b", text: "Tolerance for Error" },
      { id: "c", text: "Perceptible Information" },
      { id: "d", text: "Size and Space for Approach and Use" }
    ],
    answer: "d",
    category: "Universal Design",
    explanation: "Size and Space for Approach and Use ensures that appropriate space is provided for approach, reach, manipulation, and use regardless of body size, posture, or mobility."
  },
  {
    id: 295,
    text: "Which universal design principle emphasizes reducing hazards and minimizing unintended actions?",
    options: [
      { id: "a", text: "Low Physical Effort" },
      { id: "b", text: "Tolerance for Error" },
      { id: "c", text: "Flexibility in Use" },
      { id: "d", text: "Simple and Intuitive Use" }
    ],
    answer: "b",
    category: "Universal Design",
    explanation: "Tolerance for Error refers to minimizing hazards and the adverse consequences of accidental or unintended actions."
  },
  {
    id: 296,
    text: "Why is it important to think about physical-world accessibility when designing for the web?",
    options: [
      { id: "a", text: "Because physical accessibility laws are more strict" },
      { id: "b", text: "Because web designers often become architects later" },
      { id: "c", text: "Because it helps understand the diverse needs of users and the consequences of exclusionary design" },
      { id: "d", text: "Because all websites must also be available in print" }
    ],
    answer: "c",
    category: "Universal Design",
    explanation: "Understanding accessibility in the physical world helps inform more empathetic and inclusive design decisions in digital spaces."
  },
{
  id: 297,
  text: "Why are curb cuts considered a universal design feature on sidewalks?",
  options: [
    { id: "a", text: "They enhance sidewalk aesthetics" },
    { id: "b", text: "They provide information about road signs" },
    { id: "c", text: "They allow smoother transitions for all wheeled devices, including wheelchairs and strollers" },
    { id: "d", text: "They make sidewalks more narrow and defined" }
  ],
  answer: "c",
  category: "Universal Design",
  explanation: "Curb cuts help all users—including wheelchair users, people with strollers, carts, and bicycles—navigate smoothly between sidewalk and street, demonstrating inclusive, universal design."
},
{
  id: 298,
  text: "Which of the following sidewalk features helps blind pedestrians navigate safely?",
  options: [
    { id: "a", text: "Wider sidewalks" },
    { id: "b", text: "Tactile paving near intersections" },
    { id: "c", text: "Overhead signs" },
    { id: "d", text: "Extra grass lining" }
  ],
  answer: "b",
  category: "Universal Design",
  explanation: "Tactile paving alerts blind pedestrians of transitions or obstacles using detectable textures they can feel with their feet or canes."
},
{
  id: 299,
  text: "What accessibility barrier is most commonly introduced by cobblestone sidewalks?",
  options: [
    { id: "a", text: "They cause tripping hazards for runners" },
    { id: "b", text: "They collect water easily" },
    { id: "c", text: "They make navigation difficult for people using mobility aids" },
    { id: "d", text: "They are slippery in winter" }
  ],
  answer: "c",
  category: "Universal Design",
  explanation: "Cobblestone surfaces are uneven and difficult for people using wheelchairs, walkers, or strollers to navigate."
},
{
  id: 300,
  text: "Which universal design principle is best demonstrated by smooth, obstacle-free sidewalks?",
  options: [
    { id: "a", text: "Low Physical Effort" },
    { id: "b", text: "Perceptible Information" },
    { id: "c", text: "Simple and Intuitive Use" },
    { id: "d", text: "Flexibility in Use" }
  ],
  answer: "a",
  category: "Universal Design",
  explanation: "Smooth, level sidewalks require minimal physical exertion, supporting users with mobility limitations or fatigue."
},
{
  id: 301,
  text: "Why is it problematic when a house only has stairs and no ramp or flat entrance?",
  options: [
    { id: "a", text: "It lowers the property value" },
    { id: "b", text: "It prevents wheelchair users from entering independently" },
    { id: "c", text: "It violates zoning laws" },
    { id: "d", text: "It encourages wear on flooring" }
  ],
  answer: "b",
  category: "Physical Accessibility",
  explanation: "Without a ramp or flat entrance, wheelchair users can't independently access the building, creating an exclusionary barrier."
},
{
  id: 302,
  text: "Which of the following design features would best demonstrate equitable use in a building entrance?",
  options: [
    { id: "a", text: "Side entrance ramp for wheelchair users" },
    { id: "b", text: "Same main entrance for all users, with ramp integrated into stairs" },
    { id: "c", text: "Elevator located at the back of the building" },
    { id: "d", text: "Separate doorbell system for users needing assistance" }
  ],
  answer: "b",
  category: "Universal Design",
  explanation: "A shared, central entrance with integrated accessibility features exemplifies equitable use, ensuring no one is singled out or forced to use a separate path."
},
{
  id: 303,
  text: "What is the benefit of designing a ramp that zig-zags rather than using a long, straight incline?",
  options: [
    { id: "a", text: "It saves construction costs" },
    { id: "b", text: "It reduces the visual impact and is more aesthetically pleasing" },
    { id: "c", text: "It can prevent rainwater pooling" },
    { id: "d", text: "It adds extra safety rails" }
  ],
  answer: "b",
  category: "Universal Design",
  explanation: "Zig-zag ramps can blend better into the environment and building design while still providing full accessibility."
},
// Continuing from ID 304 - Accessibility in Multi-Level Buildings, Doorways, and Bathrooms

{
  id: 304,
  text: "Why are stairs considered a poor example of universal design?",
  options: [
    { id: "a", text: "They are universally accessible to all users." },
    { id: "b", text: "They require the use of assistive technology to function." },
    { id: "c", text: "They present barriers to many wheeled devices and cannot easily be made accessible to all." },
    { id: "d", text: "They are more expensive than elevators." }
  ],
  answer: "c",
  category: "Physical Accessibility",
  explanation: "Stairs inherently present accessibility issues for people using wheelchairs, strollers, and carts, and cannot be made universally accessible without alternatives like elevators."
},

{
  id: 305,
  text: "What universal design principle is applied when elevators include both braille and voice announcements?",
  options: [
    { id: "a", text: "Low Physical Effort" },
    { id: "b", text: "Tolerance for Error" },
    { id: "c", text: "Perceptible Information" },
    { id: "d", text: "Equitable Use" }
  ],
  answer: "c",
  category: "Universal Design",
  explanation: "Providing both tactile and auditory feedback ensures that information is perceivable to users with a variety of disabilities."
},

{
  id: 306,
  text: "Which design choice best supports independent access to doorways for users with quadriplegia?",
  options: [
    { id: "a", text: "Lever door handles" },
    { id: "b", text: "Round doorknobs" },
    { id: "c", text: "Push-button automatic doors" },
    { id: "d", text: "Heavy glass doors" }
  ],
  answer: "c",
  category: "Physical Accessibility",
  explanation: "Push-button automatic doors are accessible to individuals with limited or no hand function and allow for independent access."
},

{
  id: 307,
  text: "Why are automatic sliding doors with sensors considered more universally designed than push-button doors?",
  options: [
    { id: "a", text: "They require a strong grip to operate." },
    { id: "b", text: "They open automatically with no physical interaction required." },
    { id: "c", text: "They use biometric identification." },
    { id: "d", text: "They are only useful for wheelchair users." }
  ],
  answer: "b",
  category: "Universal Design",
  explanation: "Automatic sliding doors with sensors require no physical effort and serve a wider range of users including those without mobility or hand function."
},

{
  id: 308,
  text: "What accessibility problem do raised door thresholds pose?",
  options: [
    { id: "a", text: "They make the building colder." },
    { id: "b", text: "They are aesthetically unpleasant." },
    { id: "c", text: "They can impede wheelchair access and trip blind users." },
    { id: "d", text: "They increase maintenance costs." }
  ],
  answer: "c",
  category: "Physical Accessibility",
  explanation: "Raised thresholds can block wheelchair access and create tripping hazards for blind individuals using canes."
},

{
  id: 309,
  text: "Which group benefits most from doorbells connected to flashing lights?",
  options: [
    { id: "a", text: "People with visual impairments" },
    { id: "b", text: "People with hearing impairments" },
    { id: "c", text: "People with limited mobility" },
    { id: "d", text: "People with cognitive disabilities" }
  ],
  answer: "b",
  category: "Assistive Technology",
  explanation: "Flashing light alerts provide a visual alternative to audible doorbell sounds, benefiting users who are deaf or hard of hearing."
},

{
  id: 310,
  text: "Which Universal Design principle is demonstrated by doorbells that send a vibration to a phone or wearable?",
  options: [
    { id: "a", text: "Simple and Intuitive Use" },
    { id: "b", text: "Low Physical Effort" },
    { id: "c", text: "Perceptible Information" },
    { id: "d", text: "Tolerance for Error" }
  ],
  answer: "c",
  category: "Universal Design",
  explanation: "Vibration signals are another form of perceptible information that supports users with hearing impairments."
},

{
  id: 311,
  text: "Which of the following is NOT a common accessibility issue in bathrooms?",
  options: [
    { id: "a", text: "Tight corners that restrict movement" },
    { id: "b", text: "Toilets that flush automatically" },
    { id: "c", text: "Sinks with no clearance for wheelchairs" },
    { id: "d", text: "Faucets requiring strong grip" }
  ],
  answer: "b",
  category: "Physical Accessibility",
  explanation: "Automatic flush toilets typically aid accessibility by reducing the need for physical effort."
},

{
  id: 312,
  text: "Which Universal Design principle supports the inclusion of grab bars in accessible bathroom stalls?",
  options: [
    { id: "a", text: "Size and Space for Approach and Use" },
    { id: "b", text: "Low Physical Effort" },
    { id: "c", text: "Tolerance for Error" },
    { id: "d", text: "Flexibility in Use" }
  ],
  answer: "b",
  category: "Universal Design",
  explanation: "Grab bars assist people with limited strength or mobility to transfer safely, reducing required effort and increasing stability."
},

{
  id: 313,
  text: "Why are hands-free faucets an example of Universal Design?",
  options: [
    { id: "a", text: "They are trendy in modern architecture." },
    { id: "b", text: "They reduce water waste." },
    { id: "c", text: "They eliminate the need for grip or hand dexterity." },
    { id: "d", text: "They have better temperature control." }
  ],
  answer: "c",
  category: "Universal Design",
  explanation: "Hands-free faucets reduce the need for fine motor control, allowing a broader range of users to wash their hands independently."
},// Continue CPACC Accessibility Questions

{
  id: 314,
  text: "Which Universal Design (UD) principle is demonstrated by drinking fountains placed at varying heights?",
  options: [
    { id: "a", text: "Principle 1: Equitable Use" },
    { id: "b", text: "Principle 2: Flexibility in Use" },
    { id: "c", text: "Principle 3: Simple and Intuitive Use" },
    { id: "d", text: "Principle 6: Low Physical Effort" }
  ],
  answer: "b",
  category: "Universal Design",
  explanation: "Flexibility in Use is shown by offering multiple fountain heights to accommodate people of various statures and needs, including wheelchair users and children."
},
{
  id: 315,
  text: "What UD principle is demonstrated by auto-detecting drinking fountains that eliminate the need for manual operation?",
  options: [
    { id: "a", text: "Principle 4: Perceptible Information" },
    { id: "b", text: "Principle 6: Low Physical Effort" },
    { id: "c", text: "Principle 5: Tolerance for Error" },
    { id: "d", text: "Principle 7: Size and Space for Approach and Use" }
  ],
  answer: "b",
  category: "Universal Design",
  explanation: "Auto-detecting features reduce physical effort needed to operate the fountain, aligning with Principle 6."
},
{
  id: 316,
  text: "Why is it important for the entire public transportation system—not just parts of it—to be accessible?",
  options: [
    { id: "a", text: "Only the boarding area needs to be accessible" },
    { id: "b", text: "Blind users can't use stations without accessibility signs" },
    { id: "c", text: "Partial accessibility limits usability if the destination isn't accessible" },
    { id: "d", text: "Subway systems are typically only used by people with disabilities" }
  ],
  answer: "c",
  category: "Transportation Accessibility",
  explanation: "If a person can board a train but not exit at their destination due to inaccessibility, the entire system becomes unusable to them."
},
{
  id: 317,
  text: "Which accessibility barrier is most associated with ticket or farecard machines in transit systems?",
  options: [
    { id: "a", text: "They don't accept cash" },
    { id: "b", text: "They require Wi-Fi" },
    { id: "c", text: "They are often difficult to read, reach, or use for people with various disabilities" },
    { id: "d", text: "They lack tactile paving" }
  ],
  answer: "c",
  category: "Transportation Accessibility",
  explanation: "Farecard machines present challenges for users who are blind, use wheelchairs, or have cognitive disabilities due to poor interface and design."
},
{
  id: 318,
  text: "Which UD principle is applied when transportation systems provide tactile route maps and audible announcements?",
  options: [
    { id: "a", text: "Principle 2: Flexibility in Use" },
    { id: "b", text: "Principle 4: Perceptible Information" },
    { id: "c", text: "Principle 6: Low Physical Effort" },
    { id: "d", text: "Principle 7: Size and Space for Approach and Use" }
  ],
  answer: "b",
  category: "Universal Design",
  explanation: "Perceptible Information ensures information is communicated in ways that can be perceived regardless of sensory ability."
},
{
  id: 319,
  text: "Which feature in public transit supports Principle 7 of Universal Design (Size and Space for Approach and Use)?",
  options: [
    { id: "a", text: "Narrow turnstiles" },
    { id: "b", text: "Farecard machines with high-contrast text" },
    { id: "c", text: "Wide gates and turnstiles for wheelchairs" },
    { id: "d", text: "Color-coded maps" }
  ],
  answer: "c",
  category: "Universal Design",
  explanation: "Wide gates ensure sufficient space for users with mobility aids, supporting the principle of accessible physical space."
},
{
  id: 320,
  text: "Which accessibility solution helps blind users identify the edge of a train platform?",
  options: [
    { id: "a", text: "Bright overhead lighting" },
    { id: "b", text: "Tactile paving with raised tiles" },
    { id: "c", text: "Mirror panels" },
    { id: "d", text: "Color-coded route lines" }
  ],
  answer: "b",
  category: "Transportation Accessibility",
  explanation: "Tactile paving provides physical feedback to alert blind users of platform edges and potential danger zones."
},
{
  id: 321,
  text: "Which accessibility issue occurs when train doors blend in with the rest of the train?",
  options: [
    { id: "a", text: "Users miss boarding stops" },
    { id: "b", text: "Doors become too narrow" },
    { id: "c", text: "Passengers with low vision may struggle to find the doors" },
    { id: "d", text: "Doors become non-functional" }
  ],
  answer: "c",
  category: "Transportation Accessibility",
  explanation: "Low contrast between doors and train body creates a barrier for people with visual impairments."
},
{
  id: 322,
  text: "What does the phrase 'mind the gap' refer to in transportation accessibility?",
  options: [
    { id: "a", text: "Remembering your stop" },
    { id: "b", text: "Distance between the platform and the train" },
    { id: "c", text: "Time between train arrivals" },
    { id: "d", text: "Distance between two cities" }
  ],
  answer: "b",
  category: "Transportation Accessibility",
  explanation: "The 'gap' is the space between the train and the platform, which can be hazardous for users with mobility devices or low vision."
},
{
  id: 323,
  text: "What is a key accessibility feature in some modern taxis for blind users?",
  options: [
    { id: "a", text: "Rear-facing seating" },
    { id: "b", text: "Touchscreen with audio menu" },
    { id: "c", text: "Braille receipt printers" },
    { id: "d", text: "Colored LED fare displays" }
  ],
  answer: "b",
  category: "Transportation Accessibility",
  explanation: "Touchscreens that provide an audio interface allow blind passengers to independently verify fare, tip amount, and ride details."
},
{
  id: 324,
  text: "Why might a standard smoke detector be insufficient for a deaf person in an emergency?",
  options: [
    { id: "a", text: "They are too expensive" },
    { id: "b", text: "They produce only audio alerts" },
    { id: "c", text: "They only work in small rooms" },
    { id: "d", text: "They require constant maintenance" }
  ],
  answer: "b",
  category: "Emergencies",
  explanation: "Standard smoke detectors produce loud audio alerts which are ineffective for people who are deaf and may not notice them without visual cues like flashing lights."
},
{
  id: 325,
  text: "Which Universal Design principle supports installing smoke detectors with both audio and visual alarms?",
  options: [
    { id: "a", text: "Principle 1: Equitable Use" },
    { id: "b", text: "Principle 3: Simple and Intuitive Use" },
    { id: "c", text: "Principle 5: Tolerance for Error" },
    { id: "d", text: "Principle 7: Size and Space for Approach and Use" }
  ],
  answer: "a",
  category: "Universal Design - Emergencies",
  explanation: "Providing emergency alarms with both audio and visual signals ensures equitable access for people who are deaf or hard of hearing."
},
{
  id: 326,
  text: "What is a significant accessibility challenge blind people face during emergencies?",
  options: [
    { id: "a", text: "Hearing the alarm" },
    { id: "b", text: "Understanding evacuation protocols" },
    { id: "c", text: "Finding emergency equipment like extinguishers" },
    { id: "d", text: "Recognizing flashing lights" }
  ],
  answer: "c",
  category: "Emergencies",
  explanation: "Blind individuals may not notice emergency equipment like fire extinguishers if they are not labeled or tactilely marked, making it hard to locate them in an emergency."
},
{
  id: 327,
  text: "What is one way technology can support deaf-blind individuals during an emergency?",
  options: [
    { id: "a", text: "Using louder alarms" },
    { id: "b", text: "Installing wall-mounted flashlights" },
    { id: "c", text: "Providing vibrating mobile alerts" },
    { id: "d", text: "Offering text-to-speech features" }
  ],
  answer: "c",
  category: "Emergencies",
  explanation: "Deaf-blind individuals may rely on tactile cues such as vibrations from mobile devices to be alerted during emergencies."
},
{
  id: 328,
  text: "Which Universal Design principle supports having accessible evacuation routes for everyone?",
  options: [
    { id: "a", text: "Principle 2: Flexibility in Use" },
    { id: "b", text: "Principle 4: Perceptible Information" },
    { id: "c", text: "Principle 6: Low Physical Effort" },
    { id: "d", text: "Principle 1: Equitable Use" }
  ],
  answer: "d",
  category: "Universal Design - Emergencies",
  explanation: "Principle 1 ensures that evacuation routes are designed to be accessible and usable by all people, regardless of ability."
},
 {
    id: 329,
    text: "Which design approach helps make warning signs more understandable for people with cognitive disabilities?",
    options: [
      { id: "a", text: "Using long descriptive text" },
      { id: "b", text: "Adding bright background colors" },
      { id: "c", text: "Using visually intuitive pictograms" },
      { id: "d", text: "Avoiding graphics to reduce confusion" }
    ],
    answer: "c",
    category: "Signs",
    explanation: "Visually intuitive depictions help people with cognitive disabilities understand the meaning of signs quickly and clearly."
  },
  {
    id: 330,
    text: "Which principle of universal design is applied when QR codes are provided with instructions and alternatives?",
    options: [
      { id: "a", text: "Equitable Use" },
      { id: "b", text: "Simple and Intuitive Use" },
      { id: "c", text: "Flexibility in Use" },
      { id: "d", text: "Tolerance for Error" }
    ],
    answer: "b",
    category: "Signs",
    explanation: "Providing brief instructions and alternatives for QR codes supports the principle of 'Simple and Intuitive Use'."
  },
  {
    id: 331,
    text: "Why are printed books often inaccessible to people with print disabilities?",
    options: [
      { id: "a", text: "Because they use too much ink" },
      { id: "b", text: "Because they are difficult to carry" },
      { id: "c", text: "Because their information is not presented in digital formats" },
      { id: "d", text: "Because they are printed on glossy paper" }
    ],
    answer: "c",
    category: "Printed Materials",
    explanation: "Printed books are inaccessible to many users with print disabilities unless converted to digital formats that support screen readers and magnifiers."
  },
  {
    id: 332,
    text: "What accessibility feature is used in business cards to support blind users?",
    options: [
      { id: "a", text: "Bold color contrast" },
      { id: "b", text: "Embossed Braille" },
      { id: "c", text: "QR codes" },
      { id: "d", text: "Electronic chip readers" }
    ],
    answer: "b",
    category: "Printed Materials",
    explanation: "Braille embossing on business cards provides blind users with tactile access to essential information."
  },
  {
    id: 333,
    text: "What is a major limitation of adding braille to printed currency for blind users?",
    options: [
      { id: "a", text: "It fades quickly" },
      { id: "b", text: "It requires color vision" },
      { id: "c", text: "Not all blind users can read braille" },
      { id: "d", text: "It makes the bills too large" }
    ],
    answer: "c",
    category: "Printed Materials",
    explanation: "While Braille can help many blind users, not all are Braille literate, limiting its universality."
  },
  {
    id: 334,
    text: "Which universal design principle is supported by magnifiers for users with low vision?",
    options: [
      { id: "a", text: "Equitable Use" },
      { id: "b", text: "Low Physical Effort" },
      { id: "c", text: "Flexibility in Use" },
      { id: "d", text: "Perceptible Information" }
    ],
    answer: "d",
    category: "Printed Materials",
    explanation: "Magnifiers enhance 'Perceptible Information' by making content clearer and more visible to users with low vision."
  },{
  id: 335,
  text: "Which of the following features best supports equitable use in movie theaters?",
  options: [
    { id: "a", text: "Lower ticket prices for disabled patrons" },
    { id: "b", text: "Larger screens for better visibility" },
    { id: "c", text: "Integrated and adaptive seating" },
    { id: "d", text: "Free popcorn for customers using assistive devices" }
  ],
  answer: "c",
  category: "Movies",
  explanation: "Integrated and adaptive seating ensures that people who use mobility devices can enjoy the movie experience alongside others, supporting equitable use."
},
{
  id: 336,
  text: "How do closed captioning glasses benefit deaf users in theaters?",
  options: [
    { id: "a", text: "They convert sign language to speech" },
    { id: "b", text: "They block out sound to reduce distractions" },
    { id: "c", text: "They display subtitles only the wearer can see" },
    { id: "d", text: "They dim the screen for better focus" }
  ],
  answer: "c",
  category: "Movies",
  explanation: "Closed captioning glasses allow deaf or hard of hearing users to view captions directly in their field of vision without affecting others."
},
{
  id: 337,
  text: "Which universal design principle is addressed by ATMs that include both visual and audio interfaces?",
  options: [
    { id: "a", text: "Flexibility in Use" },
    { id: "b", text: "Low Physical Effort" },
    { id: "c", text: "Simple and Intuitive Use" },
    { id: "d", text: "Perceptible Information" }
  ],
  answer: "d",
  category: "ATMs",
  explanation: "Perceptible Information ensures that users can access content through multiple sensory modes such as sight, sound, and touch."
},
{
  id: 338,
  text: "Why are many ATMs still inaccessible to electric wheelchair users with limited upper body mobility?",
  options: [
    { id: "a", text: "They require special cards not widely available" },
    { id: "b", text: "They lack space underneath for proper wheelchair positioning" },
    { id: "c", text: "They use dial-based interfaces only" },
    { id: "d", text: "They require voice passwords" }
  ],
  answer: "b",
  category: "ATMs",
  explanation: "Many ATMs lack adequate space underneath the interface, making it hard for wheelchair users to position themselves for access."
},
{
  id: 339,
  text: "Which accessibility feature do many modern ATMs offer for blind users?",
  options: [
    { id: "a", text: "Color-coded keyboards" },
    { id: "b", text: "Audio output via headphone jack" },
    { id: "c", text: "Vibrating alerts" },
    { id: "d", text: "Haptic touchscreen feedback" }
  ],
  answer: "b",
  category: "ATMs",
  explanation: "Many ATMs offer a headphone jack for blind users to receive spoken instructions and interact through an audio interface."
},
{
  id: 340,
  text: "What key accessibility challenge is introduced with modern touchscreen mobile devices?",
  options: [
    { id: "a", text: "They lack downloadable applications" },
    { id: "b", text: "They require frequent charging" },
    { id: "c", text: "They removed physical buttons relied on by blind users" },
    { id: "d", text: "They are too large for people with small hands" }
  ],
  answer: "c",
  category: "Mobile Devices",
  explanation: "Touchscreens eliminated tactile buttons, which were vital for blind users to navigate and operate devices by feel."
},
{
  id: 341,
  text: "Which screen reader is included in Apple iOS to support mobile device accessibility?",
  options: [
    { id: "a", text: "TalkBack" },
    { id: "b", text: "Narrator" },
    { id: "c", text: "VoiceOver" },
    { id: "d", text: "Jaws Mobile" }
  ],
  answer: "c",
  category: "Mobile Devices",
  explanation: "VoiceOver is the built-in screen reader on iOS that provides audio feedback and gesture-based navigation for blind and low-vision users."
},
{
  id: 342,
  text: "How do modern mobile devices exemplify the principle of Flexibility in Use?",
  options: [
    { id: "a", text: "By supporting multiple apps" },
    { id: "b", text: "By offering multiple modes of interaction like gestures, voice, and screen readers" },
    { id: "c", text: "By including a camera and speaker" },
    { id: "d", text: "By being lightweight and portable" }
  ],
  answer: "b",
  category: "Mobile Devices",
  explanation: "Modern mobile devices support interaction through various methods, accommodating a diverse range of user needs and abilities."
},
{
  id: 343,
  text: "What is the primary goal of Universal Design for Learning (UDL)?",
  options: [
    { id: "a", text: "Standardize instruction for easier grading" },
    { id: "b", text: "Eliminate barriers and improve learning for all learners" },
    { id: "c", text: "Replace teachers with technology" },
    { id: "d", text: "Focus only on learners with disabilities" }
  ],
  answer: "b",
  category: "UDL",
  explanation: "UDL proactively removes barriers across goals, methods, materials, and assessments to support all learners."
},
{
  id: 344,
  text: "Which set lists the three core UDL principles?",
  options: [
    { id: "a", text: "Representation, Action & Expression, Engagement" },
    { id: "b", text: "Perceivable, Operable, Understandable" },
    { id: "c", text: "Recognition, Strategic, Affective" },
    { id: "d", text: "Input, Process, Output" }
  ],
  answer: "a",
  category: "UDL",
  explanation: "UDL’s three principles are multiple means of representation, action and expression, and engagement."
},
{
  id: 345,
  text: "Which brain networks align conceptually with the UDL focus areas?",
  options: [
    { id: "a", text: "Occipital, Temporal, Parietal" },
    { id: "b", text: "Recognition, Strategic, Affective" },
    { id: "c", text: "Motor, Sensory, Autonomic" },
    { id: "d", text: "Left, Right, Brainstem" }
  ],
  answer: "b",
  category: "UDL",
  explanation: "Recognition ≈ representation, Strategic ≈ action & expression, Affective ≈ engagement."
},
{
  id: 346,
  text: "Which UDL principle is MOST directly addressed by providing captions and transcripts for videos?",
  options: [
    { id: "a", text: "Multiple Means of Representation" },
    { id: "b", text: "Multiple Means of Engagement" },
    { id: "c", text: "Multiple Means of Action & Expression" },
    { id: "d", text: "Universal Assessment" }
  ],
  answer: "a",
  category: "UDL - Representation",
  explanation: "Captions and transcripts give alternative sensory pathways to the same content (representation)."
},
{
  id: 347,
  text: "UDL emphasizes designing for which type of learner?",
  options: [
    { id: "a", text: "An average, typical learner profile" },
    { id: "b", text: "Only gifted learners" },
    { id: "c", text: "Only learners with IEPs" },
    { id: "d", text: "The full variability of learners" }
  ],
  answer: "d",
  category: "UDL",
  explanation: "UDL rejects one-size-fits-all; it designs for variability in background, skills, interests, and needs."
},
{
  id: 348,
  text: "Which checkpoint aligns with allowing learners to adjust text size, contrast, and playback speed?",
  options: [
    { id: "a", text: "Checkpoint 1.1: Allow information to be customized" },
    { id: "b", text: "Checkpoint 2.3: Help decipher notation" },
    { id: "c", text: "Checkpoint 3.2: Focus on big ideas" },
    { id: "d", text: "Checkpoint 2.5: Utilize multiple media" }
  ],
  answer: "a",
  category: "UDL - Representation",
  explanation: "Checkpoint 1.1 focuses on customizable presentation (e.g., size, contrast, audio speed)."
},
{
  id: 349,
  text: "Providing tactile models of maps or molecules primarily supports which checkpoint?",
  options: [
    { id: "a", text: "Checkpoint 1.3: Make visual information accessible" },
    { id: "b", text: "Checkpoint 2.1: Explain vocabulary and symbols" },
    { id: "c", text: "Checkpoint 3.4: Support transfer" },
    { id: "d", text: "Checkpoint 1.2: Make auditory information accessible" }
  ],
  answer: "a",
  category: "UDL - Representation",
  explanation: "Checkpoint 1.3 targets making visual info accessible via descriptions and tactile alternatives."
},
{
  id: 350,
  text: "Which option best exemplifies Checkpoint 2.1 (Explain vocabulary and symbols)?",
  options: [
    { id: "a", text: "Offer transcripts for all lectures" },
    { id: "b", text: "Provide a glossary with definitions and symbol legends" },
    { id: "c", text: "Offer variable-speed audio playback" },
    { id: "d", text: "Give extended time on tests" }
  ],
  answer: "b",
  category: "UDL - Representation",
  explanation: "Explicit supports like glossaries and symbol legends clarify meaning for all learners."
},
{
  id: 351,
  text: "Highlighting the main ideas and relationships with outlines and cues addresses which checkpoint?",
  options: [
    { id: "a", text: "Checkpoint 3.2: Focus on patterns, big ideas, and relationships" },
    { id: "b", text: "Checkpoint 2.4: Support other languages" },
    { id: "c", text: "Checkpoint 1.2: Make auditory information accessible" },
    { id: "d", text: "Checkpoint 3.3: Support processing and manipulation" }
  ],
  answer: "a",
  category: "UDL - Representation",
  explanation: "Checkpoint 3.2 helps learners prioritize essential information and see connections."
},
{
  id: 352,
  text: "Activating prior knowledge with concept maps primarily supports which checkpoint?",
  options: [
    { id: "a", text: "Checkpoint 3.1: Provide background knowledge" },
    { id: "b", text: "Checkpoint 2.5: Utilize multiple media formats" },
    { id: "c", text: "Checkpoint 1.1: Customization" },
    { id: "d", text: "Checkpoint 3.4: Transfer and generalization" }
  ],
  answer: "a",
  category: "UDL - Representation",
  explanation: "Checkpoint 3.1 focuses on supplying and activating relevant background knowledge."
},
{
  id: 353,
  text: "Offering materials in both the classroom’s primary language and a learner’s native language aligns with which checkpoint?",
  options: [
    { id: "a", text: "Checkpoint 2.4: Support other languages" },
    { id: "b", text: "Checkpoint 1.2: Make auditory info accessible" },
    { id: "c", text: "Checkpoint 3.3: Support processing" },
    { id: "d", text: "Checkpoint 2.3: Help decipher notation" }
  ],
  answer: "a",
  category: "UDL - Representation",
  explanation: "Checkpoint 2.4 encourages supports for multilingual learners such as definitions and translations."
},
{
  id: 354,
  text: "Breaking complex tasks into smaller steps with scaffolds best reflects which checkpoint?",
  options: [
    { id: "a", text: "Checkpoint 3.3: Support information processing, visualization, and manipulation" },
    { id: "b", text: "Checkpoint 1.3: Make visual info accessible" },
    { id: "c", text: "Checkpoint 2.2: Highlight syntax and structure" },
    { id: "d", text: "Checkpoint 3.4: Support transfer and generalization" }
  ],
  answer: "a",
  category: "UDL - Representation",
  explanation: "Checkpoint 3.3 promotes scaffolds and stepwise guidance to strengthen processing and recall."
},
{
  id: 355,
  text: "What is the core purpose of UDL’s Principle 2: Multiple Means of Action and Expression?",
  options: [
    { id: "a", text: "To provide different ways for learners to demonstrate what they know" },
    { id: "b", text: "To make all students take the same type of test" },
    { id: "c", text: "To replace feedback with standardized grading" },
    { id: "d", text: "To eliminate authentic projects from classrooms" }
  ],
  answer: "a",
  category: "UDL - Action & Expression",
  explanation: "UDL Principle 2 emphasizes giving students multiple options—traditional and authentic—for demonstrating knowledge."
},
{
  id: 356,
  text: "Providing constructive feedback, models, and clear criteria in assessments aligns most with which UDL principle?",
  options: [
    { id: "a", text: "Multiple Means of Representation" },
    { id: "b", text: "Multiple Means of Engagement" },
    { id: "c", text: "Multiple Means of Action and Expression" },
    { id: "d", text: "Universal Design for Devices" }
  ],
  answer: "c",
  category: "UDL - Action & Expression",
  explanation: "Clear feedback and assessment models support learners in demonstrating knowledge effectively (Principle 2)."
},
{
  id: 357,
  text: "Guideline 4 under UDL’s Action and Expression focuses on what?",
  options: [
    { id: "a", text: "Options for Physical Action" },
    { id: "b", text: "Options for Representation" },
    { id: "c", text: "Options for Engagement" },
    { id: "d", text: "Options for Cognitive Processing" }
  ],
  answer: "a",
  category: "UDL - Action & Expression",
  explanation: "Guideline 4 provides options for physical action, ensuring learners can interact with materials through multiple formats and tools."
},
{
  id: 358,
  text: "Which checkpoint recommends flexibility in response and navigation to account for motor or cognitive disabilities?",
  options: [
    { id: "a", text: "Checkpoint 4.1: Provide Options for Response and Navigation" },
    { id: "b", text: "Checkpoint 7.1: Promote Individual Choice" },
    { id: "c", text: "Checkpoint 2.2: Highlight Syntax and Structure" },
    { id: "d", text: "Checkpoint 9.3: Nurture Reflection" }
  ],
  answer: "a",
  category: "UDL - Action & Expression",
  explanation: "Checkpoint 4.1 stresses alternatives in response and navigation to maximize participation despite barriers."
},
{
  id: 359,
  text: "Ensuring classroom technologies are compatible with screen readers and keyboards supports which checkpoint?",
  options: [
    { id: "a", text: "Checkpoint 4.2: Support Tools and Assistive Technologies" },
    { id: "b", text: "Checkpoint 1.3: Make Visual Information Accessible" },
    { id: "c", text: "Checkpoint 8.1: Reiterate Goals" },
    { id: "d", text: "Checkpoint 3.2: Focus on Big Ideas" }
  ],
  answer: "a",
  category: "UDL - Action & Expression",
  explanation: "Checkpoint 4.2 ensures compatibility with assistive tools so learners can access and respond effectively."
},
{
  id: 360,
  text: "What is the core aim of UDL Principle 3: Multiple Means of Engagement?",
  options: [
    { id: "a", text: "To give students only routine assessments" },
    { id: "b", text: "To provide multiple ways to recruit interest, sustain effort, and support self-regulation" },
    { id: "c", text: "To replace collaboration with independent work" },
    { id: "d", text: "To standardize how motivation is measured" }
  ],
  answer: "b",
  category: "UDL - Engagement",
  explanation: "Principle 3 focuses on recruiting interest, sustaining persistence, and nurturing self-regulation."
},
{
  id: 361,
  text: "Allowing learners to choose how they will demonstrate mastery reflects which checkpoint?",
  options: [
    { id: "a", text: "Checkpoint 7.1: Promote Individual Choice and Autonomy" },
    { id: "b", text: "Checkpoint 4.2: Support Tools" },
    { id: "c", text: "Checkpoint 2.3: Help Decipher Notation" },
    { id: "d", text: "Checkpoint 8.4: Provide Mastery-Oriented Feedback" }
  ],
  answer: "a",
  category: "UDL - Engagement",
  explanation: "Checkpoint 7.1 stresses student autonomy and choice to boost motivation and ownership of learning."
},
{
  id: 362,
  text: "Which checkpoint emphasizes making content relevant, valuable, and authentic for learners?",
  options: [
    { id: "a", text: "Checkpoint 7.2: Emphasize Relevance, Value, and Authenticity" },
    { id: "b", text: "Checkpoint 3.4: Support Transfer" },
    { id: "c", text: "Checkpoint 9.2: Strengthen Coping Skills" },
    { id: "d", text: "Checkpoint 8.2: Vary Learning Challenges" }
  ],
  answer: "a",
  category: "UDL - Engagement",
  explanation: "Checkpoint 7.2 helps learners connect content to their lives by emphasizing relevance and authenticity."
},
{
  id: 363,
  text: "Minimizing sensory overload and preparing students for changes in routine aligns with which checkpoint?",
  options: [
    { id: "a", text: "Checkpoint 7.3: Reduce Threats and Distractions" },
    { id: "b", text: "Checkpoint 8.3: Promote Collaboration" },
    { id: "c", text: "Checkpoint 1.2: Make Auditory Information Accessible" },
    { id: "d", text: "Checkpoint 9.1: Use Belief to Increase Motivation" }
  ],
  answer: "a",
  category: "UDL - Engagement",
  explanation: "Checkpoint 7.3 focuses on reducing threats and distractions to create a safe, supportive learning environment."
},
{
  id: 364,
  text: "Encouraging group activities, peer tutors, and collaborative projects is most aligned with which checkpoint?",
  options: [
    { id: "a", text: "Checkpoint 8.3: Promote Collaboration and Communication" },
    { id: "b", text: "Checkpoint 9.1: Increase Motivation through Belief" },
    { id: "c", text: "Checkpoint 4.1: Response and Navigation" },
    { id: "d", text: "Checkpoint 7.2: Emphasize Relevance" }
  ],
  answer: "a",
  category: "UDL - Engagement",
  explanation: "Checkpoint 8.3 promotes communication and collaboration as ways to sustain engagement and effort."
},
{
  id: 365,
  text: "Providing frequent, constructive, mastery-oriented feedback aligns with which checkpoint?",
  options: [
    { id: "a", text: "Checkpoint 8.4: Give Mastery-Oriented Feedback Often" },
    { id: "b", text: "Checkpoint 7.1: Promote Choice" },
    { id: "c", text: "Checkpoint 9.2: Strengthen Coping Skills" },
    { id: "d", text: "Checkpoint 3.1: Provide Background Knowledge" }
  ],
  answer: "a",
  category: "UDL - Engagement",
  explanation: "Checkpoint 8.4 emphasizes feedback that supports growth and mastery, not just right/wrong answers."
},
{
  id: 366,
  text: "Rubrics, checklists, and self-reflection activities that help students set and track goals support which checkpoint?",
  options: [
    { id: "a", text: "Checkpoint 9.1: Use Belief to Increase Motivation" },
    { id: "b", text: "Checkpoint 8.1: Reiterate Goals" },
    { id: "c", text: "Checkpoint 7.3: Reduce Threats" },
    { id: "d", text: "Checkpoint 3.3: Support Processing" }
  ],
  answer: "a",
  category: "UDL - Engagement",
  explanation: "Checkpoint 9.1 fosters belief in goal achievement by helping students set, manage, and reflect on goals."
},
{
  id: 367,
  text: "Teaching coping strategies and modeling how to manage frustration primarily supports which checkpoint?",
  options: [
    { id: "a", text: "Checkpoint 9.2: Help Strengthen Coping Skills and Strategies" },
    { id: "b", text: "Checkpoint 8.2: Vary Challenges" },
    { id: "c", text: "Checkpoint 7.2: Emphasize Relevance" },
    { id: "d", text: "Checkpoint 1.1: Customization" }
  ],
  answer: "a",
  category: "UDL - Engagement",
  explanation: "Checkpoint 9.2 equips learners with strategies to manage stress and frustration during learning."
},
{
  id: 368,
  text: "Allowing students to use portfolios, charts, and self-assessments to track progress aligns with which checkpoint?",
  options: [
    { id: "a", text: "Checkpoint 9.3: Nurture Self-Assessment and Reflection" },
    { id: "b", text: "Checkpoint 4.2: Assistive Technologies" },
    { id: "c", text: "Checkpoint 8.4: Feedback" },
    { id: "d", text: "Checkpoint 3.2: Focus on Big Ideas" }
  ],
  answer: "a",
  category: "UDL - Engagement",
  explanation: "Checkpoint 9.3 emphasizes reflection and self-monitoring as ways to sustain motivation and engagement."
},
{
  id: 369,
  text: "Which of the following is NOT one of the five key components of usability?",
  options: [
    { id: "a", text: "Ease of learning basic tasks" },
    { id: "b", text: "Error tolerance and recovery" },
    { id: "c", text: "Engagement and satisfaction" },
    { id: "d", text: "Financial profitability of the product" }
  ],
  answer: "d",
  category: "Usability",
  explanation: "Usability focuses on ease of learning, efficiency, error tolerance, recall, and satisfaction — not financial profitability."
},
{
  id: 370,
  text: "Steve Krug’s 'first law of usability' can be summarized as:",
  options: [
    { id: "a", text: "Users should be entertained" },
    { id: "b", text: "Don’t make me think" },
    { id: "c", text: "Every user error must be eliminated" },
    { id: "d", text: "Design for accessibility only" }
  ],
  answer: "b",
  category: "Usability",
  explanation: "Krug emphasizes that usability means reducing cognitive load so the interface is obvious and self-explanatory."
},
{
  id: 371,
  text: "According to Whitney Quesenbery’s framework, which of the following is NOT one of the 5 E’s of usability?",
  options: [
    { id: "a", text: "Effective" },
    { id: "b", text: "Efficient" },
    { id: "c", text: "Error tolerant" },
    { id: "d", text: "Exclusive" }
  ],
  answer: "d",
  category: "Usability",
  explanation: "The 5 E’s are Effective, Efficient, Easy to learn, Error tolerant, and Engaging. 'Exclusive' is the opposite of usability."
},
{
  id: 372,
  text: "How does usability differ from overall user experience (UX)?",
  options: [
    { id: "a", text: "Usability only measures accessibility for disabled users" },
    { id: "b", text: "Usability is a part of UX, focusing on ease of use, while UX also includes usefulness, desirability, accessibility, and credibility" },
    { id: "c", text: "Usability and UX are exactly the same" },
    { id: "d", text: "UX is about coding efficiency, usability is about marketing design" }
  ],
  answer: "b",
  category: "Usability vs UX",
  explanation: "Usability is one element of UX. UX also considers usefulness, desirability, accessibility, and credibility."
},
{
  id: 373,
  text: "What is a key characteristic of user-centered design?",
  options: [
    { id: "a", text: "Design decisions are based solely on developer preferences" },
    { id: "b", text: "Users are involved throughout the design process via research and testing" },
    { id: "c", text: "Accessibility testing is skipped until final launch" },
    { id: "d", text: "It prioritizes aesthetics over usability" }
  ],
  answer: "b",
  category: "User-Centered Design",
  explanation: "User-centered design means involving users in iterative research and testing, ensuring the product meets real user needs."
},
{
  id: 374,
  text: "Which statement best describes the overlap between usability and accessibility?",
  options: [
    { id: "a", text: "They have no overlap because usability is only for nondisabled users" },
    { id: "b", text: "Accessibility increases usability for everyone, while usability practices can enhance accessibility" },
    { id: "c", text: "Usability always creates accessibility issues" },
    { id: "d", text: "Accessibility makes designs less usable" }
  ],
  answer: "b",
  category: "Usability & Accessibility",
  explanation: "Accessibility and usability overlap—high-contrast colors, keyboard navigation, and plain language benefit everyone."
},
{
  id: 375,
  text: "Which of the following is an example of a usability issue, not specifically an accessibility issue?",
  options: [
    { id: "a", text: "All users struggle to find where to click due to poor navigation design" },
    { id: "b", text: "A blind user cannot use an unlabeled button" },
    { id: "c", text: "Deaf users cannot access a video without captions" },
    { id: "d", text: "Motor-impaired users cannot tab through form fields" }
  ],
  answer: "a",
  category: "Usability vs Accessibility",
  explanation: "Poor navigation affects all users (usability), while missing labels, captions, and tab order are accessibility barriers."
},
{
  id: 376,
  text: "What is a potential risk of fixing accessibility issues without considering usability?",
  options: [
    { id: "a", text: "Accessibility improvements may cause usability issues, such as overly long alt text making navigation tedious" },
    { id: "b", text: "Accessibility fixes always reduce usability" },
    { id: "c", text: "Accessibility and usability never interact" },
    { id: "d", text: "Accessibility issues are more important, so usability is irrelevant" }
  ],
  answer: "a",
  category: "Usability & Accessibility",
  explanation: "Accessibility fixes must balance usability—for instance, long alt text may technically be accessible but harm usability."
},{
  id: 377,
  text: "Which of the following statements represents a common myth about accessibility?",
  options: [
    { id: "a", text: "Accessibility benefits only a small minority of people" },
    { id: "b", text: "Accessibility can benefit people using mobile devices" },
    { id: "c", text: "Accessibility helps aging populations with declining abilities" },
    { id: "d", text: "Accessible websites are easier to index by search engines" }
  ],
  answer: "a",
  category: "Accessibility Myths",
  explanation: "A common myth is that accessibility benefits only a small minority. In reality, it benefits many groups, including mobile users, older adults, and search engines."
},
{
  id: 378,
  text: "Approximately what percentage of the population lives with some type of disability at any given time?",
  options: [
    { id: "a", text: "5%" },
    { id: "b", text: "10%" },
    { id: "c", text: "20%" },
    { id: "d", text: "35%" }
  ],
  answer: "c",
  category: "Accessibility Myths",
  explanation: "People with disabilities make up about 20% of the population. Dismissing this group ignores a significant minority."
},
{
  id: 379,
  text: "Why is it a myth to think of accessibility as a short-term project?",
  options: [
    { id: "a", text: "Accessibility only matters until a site is launched" },
    { id: "b", text: "Accessibility is an ongoing requirement, like security or privacy" },
    { id: "c", text: "Accessibility standards change yearly, so old work becomes irrelevant" },
    { id: "d", text: "Accessibility can be ignored if no disabled users are identified" }
  ],
  answer: "b",
  category: "Accessibility Myths",
  explanation: "Accessibility must be embedded across all stages of design and development, just like security and privacy."
},
{
  id: 380,
  text: "What is one key organizational strategy to ensure accessibility is sustained long-term?",
  options: [
    { id: "a", text: "Leave accessibility to individual developers" },
    { id: "b", text: "Rely on automated testing only" },
    { id: "c", text: "Commit leadership support, resources, and full-time roles" },
    { id: "d", text: "Retrofit accessibility features after launch" }
  ],
  answer: "c",
  category: "Accessibility Myths",
  explanation: "Leadership commitment, dedicated resources, and full-time accessibility staff are critical for sustained accessibility efforts."
},
{
  id: 381,
  text: "Which of the following best explains why accessibility should not be the last step in the design process?",
  options: [
    { id: "a", text: "Retrofitting is easier than planning for accessibility" },
    { id: "b", text: "Adding accessibility last increases efficiency" },
    { id: "c", text: "Accessibility is easiest, cheapest, and most effective when built in from the beginning" },
    { id: "d", text: "Accessibility only matters for compliance at the end" }
  ],
  answer: "c",
  category: "Accessibility Myths",
  explanation: "Designing with accessibility in mind from the start avoids costly retrofits, poor UX, and legal risk."
},
{
  id: 382,
  text: "Why is the myth that accessibility is too expensive misleading?",
  options: [
    { id: "a", text: "Accessibility always costs more than it saves" },
    { id: "b", text: "Accessibility costs are minor when compared to lawsuits and negative publicity" },
    { id: "c", text: "Accessibility should only be done if customers request it" },
    { id: "d", text: "Accessibility is only costly for nonprofits" }
  ],
  answer: "b",
  category: "Accessibility Myths",
  explanation: "Accessibility costs are reasonable compared to the expenses of retrofitting, lawsuits, and negative publicity."
},
{
  id: 383,
  text: "Which of the following is true about the myth that accessibility makes websites ugly?",
  options: [
    { id: "a", text: "Accessibility features always ruin visual design" },
    { id: "b", text: "Most accessibility features are invisible in the final design" },
    { id: "c", text: "Accessible designs must sacrifice creativity" },
    { id: "d", text: "Accessible sites can never be aesthetically pleasing" }
  ],
  answer: "b",
  category: "Accessibility Myths",
  explanation: "Most accessibility features (alt text, ARIA, labels, markup) are invisible. Accessibility can coexist with beautiful, creative design."
},
{
  id: 384,
  text: "What example illustrates that accessibility and aesthetics can go hand in hand?",
  options: [
    { id: "a", text: "Using bright flashing lights in all designs" },
    { id: "b", text: "Aimee Mullins' prosthetic legs designed as both functional and beautiful" },
    { id: "c", text: "Plain text-only websites" },
    { id: "d", text: "Removing all images to simplify design" }
  ],
  answer: "b",
  category: "Accessibility Myths",
  explanation: "Aimee Mullins’ artistic prosthetics show accessibility can also be a source of creativity and beauty."
},
{
  id: 385,
  text: "Which of the following best describes the purpose of accessibility legislation?",
  options: [
    { id: "a", text: "To provide design guidelines only for private businesses" },
    { id: "b", text: "To enforce accessibility as a fundamental human right through civil, procurement, or industry-specific laws" },
    { id: "c", text: "To offer suggestions that developers may follow voluntarily" },
    { id: "d", text: "To regulate only online shopping platforms" }
  ],
  answer: "b",
  category: "Accessibility Standards and Laws",
  explanation: "Accessibility laws exist to protect human rights and may take the form of civil rights laws, procurement rules, or industry-specific legislation."
},
{
  id: 386,
  text: "Which of the following is an example of a civil rights law related to accessibility?",
  options: [
    { id: "a", text: "Section 508 of the Rehabilitation Act" },
    { id: "b", text: "Americans with Disabilities Act (ADA)" },
    { id: "c", text: "EN 301 549" },
    { id: "d", text: "21st Century Communications and Video Accessibility Act (CVAA)" }
  ],
  answer: "b",
  category: "Accessibility Standards and Laws",
  explanation: "The ADA is a civil rights law that prohibits discrimination against people with disabilities and often applies to public spaces and accommodations."
},
{
  id: 387,
  text: "What type of law requires accessibility to be considered when purchasing or contracting for products and services?",
  options: [
    { id: "a", text: "Civil rights law" },
    { id: "b", text: "Procurement law" },
    { id: "c", text: "Industry-specific law" },
    { id: "d", text: "Corporate governance law" }
  ],
  answer: "b",
  category: "Accessibility Standards and Laws",
  explanation: "Procurement laws, such as Section 508 in the U.S. and EN 301 549 in the EU, require government entities to purchase accessible products and services."
},
{
  id: 388,
  text: "Which accessibility law specifically applies to telecommunications and digital communications in the United States?",
  options: [
    { id: "a", text: "Air Carrier Access Act (ACAA)" },
    { id: "b", text: "21st Century Communications and Video Accessibility Act (CVAA)" },
    { id: "c", text: "Section 504 of the Rehabilitation Act" },
    { id: "d", text: "Americans with Disabilities Act (ADA)" }
  ],
  answer: "b",
  category: "Accessibility Standards and Laws",
  explanation: "The CVAA addresses accessibility in telecommunications, video programming, and advanced communication services."
},
{
  id: 389,
  text: "When was the Universal Declaration of Human Rights adopted by the United Nations General Assembly?",
  options: [
    { id: "a", text: "1945" },
    { id: "b", text: "1946" },
    { id: "c", text: "1948" },
    { id: "d", text: "1950" }
  ],
  answer: "c",
  category: "Accessibility Standards and Laws",
  explanation: "The Universal Declaration of Human Rights was adopted on December 10, 1948, in Paris, France."
},
{
  id: 390,
  text: "Who chaired the Commission on Human Rights that drafted the Universal Declaration of Human Rights?",
  options: [
    { id: "a", text: "Dag Hammarskjöld" },
    { id: "b", text: "Eleanor Roosevelt" },
    { id: "c", text: "Kofi Annan" },
    { id: "d", text: "Nelson Mandela" }
  ],
  answer: "b",
  category: "Accessibility Standards and Laws",
  explanation: "Eleanor Roosevelt chaired the Commission on Human Rights, leading the drafting of the Universal Declaration of Human Rights."
},
{
  id: 391,
  text: "How many articles are included in the Universal Declaration of Human Rights?",
  options: [
    { id: "a", text: "10" },
    { id: "b", text: "20" },
    { id: "c", text: "25" },
    { id: "d", text: "30" }
  ],
  answer: "d",
  category: "Accessibility Standards and Laws",
  explanation: "The Universal Declaration of Human Rights includes a preamble and 30 articles outlining fundamental human rights."
},
{
  id: 392,
  text: "What did the 1975 Declaration on the Rights of Disabled Persons emphasize?",
  options: [
    { id: "a", text: "That accessibility was optional for wealthy nations" },
    { id: "b", text: "That people with disabilities have the same civil and political rights as others, and must be protected from exploitation, discrimination, and abuse" },
    { id: "c", text: "That only physical disabilities needed to be recognized" },
    { id: "d", text: "That disability rights were separate from human rights" }
  ],
  answer: "b",
  category: "Accessibility Standards and Laws",
  explanation: "The 1975 declaration recognized disability rights as human rights, emphasizing protection against exploitation and abuse, and supporting ability development."
},
{
  id: 393,
  text: "What is the primary goal of the Marrakesh Treaty (2013)?",
  options: [
    { id: "a", text: "To create new copyright laws for publishers" },
    { id: "b", text: "To allow unrestricted distribution of all books" },
    { id: "c", text: "To ensure persons who are blind, visually impaired, or otherwise print disabled can access published works" },
    { id: "d", text: "To eliminate the need for international copyright agreements" }
  ],
  answer: "c",
  category: "Accessibility Standards and Laws",
  explanation: "The Marrakesh Treaty creates exceptions to copyright so accessible formats of works can be created and shared across borders, addressing the global 'book famine' for people with print disabilities."
},
{
  id: 394,
  text: "What major shift did the UN Convention on the Rights of Persons with Disabilities (UN CRPD) represent?",
  options: [
    { id: "a", text: "From a rights-based model to a medical model" },
    { id: "b", text: "From a charity model to a human rights model" },
    { id: "c", text: "From legal protections to optional guidelines" },
    { id: "d", text: "From global treaties to national discretion" }
  ],
  answer: "b",
  category: "Accessibility Standards and Laws",
  explanation: "The UN CRPD signified a paradigm shift away from medical and charity models toward a human rights and social inclusion model, emphasizing accessibility, universal design, and equal participation."
},
{
  id: 395,
  text: "What mechanism strengthens the UN CRPD’s enforcement through individual complaints and monitoring?",
  options: [
    { id: "a", text: "The Marrakesh Treaty" },
    { id: "b", text: "The Universal Declaration of Human Rights" },
    { id: "c", text: "The Optional Protocol to the CRPD" },
    { id: "d", text: "The European Convention on Human Rights" }
  ],
  answer: "c",
  category: "Accessibility Standards and Laws",
  explanation: "The 2008 Optional Protocol enables individuals and groups to submit complaints to the UN Committee on the Rights of Persons with Disabilities, making the CRPD operational in practice."
},
{
  id: 396,
  text: "Which EU legal document explicitly recognizes the right of persons with disabilities to independence, social integration, and participation?",
  options: [
    { id: "a", text: "The European Convention on Human Rights" },
    { id: "b", text: "The Charter of Fundamental Rights of the European Union" },
    { id: "c", text: "The Marrakesh Treaty" },
    { id: "d", text: "The African Disability Rights Protocol" }
  ],
  answer: "b",
  category: "Accessibility Standards and Laws",
  explanation: "Article 26 of the EU Charter of Fundamental Rights affirms the right of persons with disabilities to independence, social and occupational integration, and participation in community life."
},
{
  id: 397,
  text: "Why has the African Disability Rights Protocol (ADRP) not yet entered into force?",
  options: [
    { id: "a", text: "It was rejected by the United Nations" },
    { id: "b", text: "It is still waiting for 15 ratifications" },
    { id: "c", text: "It was replaced by the UN CRPD" },
    { id: "d", text: "It only applies to EU member states" }
  ],
  answer: "b",
  category: "Accessibility Standards and Laws",
  explanation: "The ADRP, adopted in 2018, strengthens protections for persons with disabilities in Africa but requires 15 ratifications to come into force; as of late 2023, that threshold has not been reached."
},
{
  id: 398,
  text: "What is the primary objective stated in Article II of the Inter-American Convention?",
  options: [
    { id: "a", text: "To promote charity toward persons with disabilities" },
    { id: "b", text: "To prevent and eliminate discrimination and promote full integration into society" },
    { id: "c", text: "To replace national disability laws with a single regional law" },
    { id: "d", text: "To focus only on employment-related discrimination" }
  ],
  answer: "b",
  category: "Accessibility Standards and Laws",
  explanation: "Article II sets the Convention’s goal: prevent and eliminate all forms of discrimination against persons with disabilities and promote their full social integration."
},
{
  id: 399,
  text: "Which of the following measures is explicitly listed in Article III of the Inter-American Convention?",
  options: [
    { id: "a", text: "Subsidizing private healthcare for all citizens" },
    { id: "b", text: "Ensuring new buildings, vehicles, and facilities facilitate access and communication" },
    { id: "c", text: "Privatizing public transportation systems" },
    { id: "d", text: "Eliminating all architectural regulations" }
  ],
  answer: "b",
  category: "Accessibility Standards and Laws",
  explanation: "Article III directs states to ensure new buildings, vehicles, and facilities enable transportation, communications, and access by persons with disabilities."
},
{
  id: 400,
  text: "Article III also calls for which of the following priority actions?",
  options: [
    { id: "a", text: "Reducing disability services to lower costs" },
    { id: "b", text: "Preventing all forms of preventable disabilities and providing early detection and comprehensive services" },
    { id: "c", text: "Focusing only on competitive sports for persons with disabilities" },
    { id: "d", text: "Mandating military service exemptions" }
  ],
  answer: "b",
  category: "Accessibility Standards and Laws",
  explanation: "States should prioritize prevention, early detection and intervention, rehabilitation, education, job training, and comprehensive services to maximize independence and quality of life."
},
{
  id: 401,
  text: "Which cultural change is encouraged by Article III to reduce discrimination?",
  options: [
    { id: "a", text: "Public awareness campaigns to eliminate prejudices and stereotypes" },
    { id: "b", text: "Mandatory segregated facilities for safety" },
    { id: "c", text: "Banning disability topics from media" },
    { id: "d", text: "Limiting access to political participation" }
  ],
  answer: "a",
  category: "Accessibility Standards and Laws",
  explanation: "The Convention urges educational campaigns to eliminate prejudices, stereotypes, and attitudes that undermine equality."
},
{
  id: 402,
  text: "The UK Equality Act 2010 primarily aims to:",
  options: [
    { id: "a", text: "Replace disability law with voluntary guidelines" },
    { id: "b", text: "Unify and strengthen anti-discrimination law across protected characteristics" },
    { id: "c", text: "Apply only to private clubs and religious entities" },
    { id: "d", text: "Address disability but not other protected traits" }
  ],
  answer: "b",
  category: "Accessibility Standards and Laws",
  explanation: "The Equality Act consolidates and harmonizes anti-discrimination laws, explicitly including disability among protected characteristics."
},
{
  id: 403,
  text: "Under the Equality Act 2010, which statement best distinguishes direct vs indirect discrimination?",
  options: [
    { id: "a", text: "Direct affects groups; indirect affects individuals" },
    { id: "b", text: "Direct is accidental; indirect is always intentional" },
    { id: "c", text: "Direct is treating someone worse because of a protected trait; indirect is a neutral policy that disadvantages a protected group" },
    { id: "d", text: "There is no legal difference" }
  ],
  answer: "c",
  category: "Accessibility Standards and Laws",
  explanation: "Direct discrimination is explicit unfavorable treatment; indirect arises when an apparently neutral rule puts people with a protected characteristic at a particular disadvantage."
},
{
  id: 404,
  text: "Which list correctly contains protected characteristics under the Equality Act 2010?",
  options: [
    { id: "a", text: "Disability, hair color, handedness" },
    { id: "b", text: "Age, disability, gender reassignment, race, religion or belief, sex, sexual orientation, marriage and civil partnership, pregnancy and maternity" },
    { id: "c", text: "Citizenship, height, income level" },
    { id: "d", text: "Political party, driving status, postcode" }
  ],
  answer: "b",
  category: "Accessibility Standards and Laws",
  explanation: "Section 4 enumerates the protected characteristics, including disability and the others listed in option (b)."
},
{
  id: 405,
  text: "Which statement about the Americans with Disabilities Act (ADA) is MOST accurate based on the provided info?",
  options: [
    { id: "a", text: "It applies only to federal government websites" },
    { id: "b", text: "Title II now requires state and local government websites and mobile apps to conform to WCAG 2.1 AA on a set timeline" },
    { id: "c", text: "It excludes places of public accommodation" },
    { id: "d", text: "It is not enforced by the U.S. Department of Justice" }
  ],
  answer: "b",
  category: "Accessibility Standards and Laws",
  explanation: "In April 2024, ADA Title II was updated to require state and local government digital services to meet WCAG 2.1 AA with deadlines in 2026–2027; ADA is also widely cited in web accessibility lawsuits under Title III."
},
{
  id: 406,
  text: "Who enforces the ADA provisions mentioned in the material?",
  options: [
    { id: "a", text: "Only private citizens through class actions" },
    { id: "b", text: "The U.S. Department of Justice Civil Rights Division and, for education, the U.S. Department of Education Office for Civil Rights" },
    { id: "c", text: "The World Wide Web Consortium (W3C)" },
    { id: "d", text: "The United Nations Human Rights Council" }
  ],
  answer: "b",
  category: "Accessibility Standards and Laws",
  explanation: "The DOJ Civil Rights Division and DOE OCR enforce ADA compliance through settlements and consent decrees, among other actions."
},
{
  id: 407,
  text: "The EU Employment Equality Directive (2000) requires member states to:",
  options: [
    { id: "a", text: "Ban disability accommodations to avoid bias" },
    { id: "b", text: "Prohibit disability discrimination in employment and require reasonable accommodation" },
    { id: "c", text: "Apply only to public-sector jobs" },
    { id: "d", text: "Repeal national disability laws" }
  ],
  answer: "b",
  category: "Accessibility Standards and Laws",
  explanation: "The directive prohibits disability discrimination in employment and mandates reasonable accommodation, transposed into national law across the EU."
},
{
  id: 408,
  text: "Which statement best captures the scope of Ontario’s AODA?",
  options: [
    { id: "a", text: "It applies only to the Ontario provincial government" },
    { id: "b", text: "It applies to public and private sectors in Ontario that provide goods, services, facilities, employ people, or own/occupy premises" },
    { id: "c", text: "It governs only higher-education institutions" },
    { id: "d", text: "It concerns only physical building codes" }
  ],
  answer: "b",
  category: "Accessibility Standards and Laws",
  explanation: "AODA broadly covers organizations across public and private sectors in Ontario, driving accessible practices across services, employment, and facilities."
},
{
  id: 409,
  text: "Japan’s Act on the Elimination of Discrimination against Persons with Disabilities primarily:",
  options: [
    { id: "a", text: "Encourages voluntary measures without obligations" },
    { id: "b", text: "Prohibits disability-based discrimination and requires necessary accommodations by organizations and private entities" },
    { id: "c", text: "Applies only to transportation providers" },
    { id: "d", text: "Focuses solely on education and excludes employment" }
  ],
  answer: "b",
  category: "Accessibility Standards and Laws",
  explanation: "The Act seeks to remove social barriers by prohibiting discrimination and requiring necessary accommodations in both public and private sectors."
},
{
  id: 410,
  text: "Which best describes Section 508 of the U.S. Rehabilitation Act (post-2017 refresh)?",
  options: [
    { id: "a", text: "It applies to all private companies regardless of federal ties" },
    { id: "b", text: "It requires U.S. federal agencies to procure and provide ICT that conforms to WCAG A/AA, impacting vendors who sell to government" },
    { id: "c", text: "It addresses only hardware but not software or websites" },
    { id: "d", text: "It eliminated functional performance criteria" }
  ],
  answer: "b",
  category: "Accessibility Standards and Laws",
  explanation: "The 2017 refresh aligns Section 508 with WCAG A/AA and covers federal agency ICT; vendors often align to sell to government."
},
{
  id: 411,
  text: "Under the EU Procurement Directive 2014/24/EU, contracting authorities should:",
  options: [
    { id: "a", text: "Ignore accessibility unless a bidder requests it" },
    { id: "b", text: "Include accessibility or design-for-all criteria in technical specifications except in duly justified cases" },
    { id: "c", text: "Accept the lowest bid regardless of accessibility" },
    { id: "d", text: "Ban electronic communication in tenders" }
  ],
  answer: "b",
  category: "Accessibility Standards and Laws",
  explanation: "The directive requires accessibility criteria in specs (or other applicable EU accessibility requirements) and even allows excluding suppliers who breach accessibility-related obligations."
},
{
  id: 412,
  text: "Which action aligns with Article III of the Inter-American Convention regarding implementation?",
  options: [
    { id: "a", text: "Provide training to those responsible for applying disability law and the Convention" },
    { id: "b", text: "Limit access to justice to reduce costs" },
    { id: "c", text: "Delay accessibility until infrastructure is complete" },
    { id: "d", text: "Focus only on communications and ignore transportation" }
  ],
  answer: "a",
  category: "Accessibility Standards and Laws",
  explanation: "Article III calls for training persons responsible for applying the Convention and domestic laws, ensuring effective implementation."
},
{
  id: 413,
  text: "What is the purpose of the 21st Century Communications and Video Accessibility Act (CVAA)?",
  options: [
    { id: "a", text: "To regulate international air travel accessibility" },
    { id: "b", text: "To update communications laws to ensure accessibility of modern digital, broadband, and mobile technologies for persons with disabilities" },
    { id: "c", text: "To create a single global accessibility standard" },
    { id: "d", text: "To focus only on physical building accessibility" }
  ],
  answer: "b",
  category: "Technology and Accessibility Laws",
  explanation: "The CVAA updates U.S. communications law to ensure accessibility of modern digital, broadband, and mobile technologies for people with disabilities, including captioning requirements for internet video."
},
{
  id: 414,
  text: "Which requirement is specifically included under the CVAA?",
  options: [
    { id: "a", text: "All web-only videos must include audio descriptions" },
    { id: "b", text: "All video programs shown on TV with captions must also include captions when presented on the internet" },
    { id: "c", text: "Only federal government websites must include captions" },
    { id: "d", text: "Private streaming platforms are exempt from accessibility" }
  ],
  answer: "b",
  category: "Technology and Accessibility Laws",
  explanation: "The CVAA requires that all TV programs with captions must also be captioned when shown on the internet, ensuring access for people with hearing disabilities."
},
{
  id: 415,
  text: "The Air Carrier Access Act (ACAA) prohibits what type of discrimination?",
  options: [
    { id: "a", text: "Discrimination based on gender in ticket pricing" },
    { id: "b", text: "Discrimination on the basis of disability in air travel" },
    { id: "c", text: "Discrimination in international visa approvals" },
    { id: "d", text: "Discrimination based on political affiliation in airports" }
  ],
  answer: "b",
  category: "Technology and Accessibility Laws",
  explanation: "The ACAA prohibits disability-based discrimination in air travel and requires carriers to accommodate passengers with disabilities."
},
{
  id: 416,
  text: "According to ACAA rules updated in 2013, U.S. and foreign air carriers must:",
  options: [
    { id: "a", text: "Provide free wheelchairs to all passengers" },
    { id: "b", text: "Ensure their websites and ticket kiosks conform to WCAG 2.0 Level AA" },
    { id: "c", text: "Offer disability discounts for international flights" },
    { id: "d", text: "Provide in-flight internet for all passengers" }
  ],
  answer: "b",
  category: "Technology and Accessibility Laws",
  explanation: "The 2013 rule requires U.S. and foreign carriers to make public-facing websites and ticket kiosks accessible according to WCAG 2.0 Level AA."
},
{
  id: 417,
  text: "Which Canadian province mandates compliance with a modified WCAG Level AA standard for government websites?",
  options: [
    { id: "a", text: "Ontario" },
    { id: "b", text: "British Columbia" },
    { id: "c", text: "Quebec" },
    { id: "d", text: "Alberta" }
  ],
  answer: "c",
  category: "Technology and Accessibility Laws",
  explanation: "Quebec requires government websites to comply with Standards sur l'accessibilité du Web, which is based on a modified version of WCAG Level AA."
},
{
  id: 418,
  text: "What does the EU Audiovisual Media Services Directive (AVMSD) require of media services?",
  options: [
    { id: "a", text: "To ensure services are progressively made accessible to persons with disabilities" },
    { id: "b", text: "To ban captioning in broadcasts" },
    { id: "c", text: "To limit accessible services to emergency broadcasts only" },
    { id: "d", text: "To provide accessibility only if requested by a user" }
  ],
  answer: "a",
  category: "Technology and Accessibility Laws",
  explanation: "The AVMSD requires that audiovisual media services be progressively made more accessible to people with disabilities, including emergency information."
},
{
  id: 419,
  text: "Which European standard sets accessibility requirements for ICT products and services, aligning with WCAG 2.1 Level AA?",
  options: [
    { id: "a", text: "EN 17210" },
    { id: "b", text: "EN 301 549" },
    { id: "c", text: "BITV 2" },
    { id: "d", text: "RGAA" }
  ],
  answer: "b",
  category: "Technology and Accessibility Laws",
  explanation: "EN 301 549 is the European standard covering ICT accessibility requirements, including web, mobile apps, and other technologies, aligned with WCAG 2.1 AA."
},
{
  id: 420,
  text: "What is the goal of the European Accessibility Act (EAA), adopted in 2019?",
  options: [
    { id: "a", text: "To replace the ADA in Europe" },
    { id: "b", text: "To create a unified set of accessibility requirements across EU member states for key products and services" },
    { id: "c", text: "To require free assistive technology for all EU citizens" },
    { id: "d", text: "To regulate only government intranet accessibility" }
  ],
  answer: "b",
  category: "Technology and Accessibility Laws",
  explanation: "The EAA establishes a unified EU framework for accessibility of products and services, covering ICT, transport, banking, e-commerce, and more."
},
{
  id: 421,
  text: "Which accessibility law requires government websites in France to comply with RGAA, based on WCAG AA?",
  options: [
    { id: "a", text: "French Law 2005-102" },
    { id: "b", text: "BITV 2" },
    { id: "c", text: "Law 34/2002" },
    { id: "d", text: "JIS X 8341" }
  ],
  answer: "a",
  category: "Technology and Accessibility Laws",
  explanation: "French Law 2005-102 requires government websites and public services to comply with RGAA, which is based on WCAG Level AA."
},
{
  id: 422,
  text: "Which Japanese standard governs accessibility of ICT products, software, and services for older persons and persons with disabilities?",
  options: [
    { id: "a", text: "EN 301 549" },
    { id: "b", text: "JIS X 8341" },
    { id: "c", text: "RGAA" },
    { id: "d", text: "BITV 2" }
  ],
  answer: "b",
  category: "Technology and Accessibility Laws",
  explanation: "Japan’s JIS X 8341 standard is based on WCAG and sets accessibility requirements for ICT, software, and services."
},
{
  id: 423,
  text: "Why is it important for organizations to establish accessibility governance and management rather than only remediating issues as they arise?",
  options: [
    { id: "a", text: "It reduces long-term costs and avoids legal risks while promoting accessibility awareness" },
    { id: "b", text: "It ensures accessibility only when users file complaints" },
    { id: "c", text: "It delays accessibility work until after development is complete" },
    { id: "d", text: "It removes the need for training or policies" }
  ],
  answer: "a",
  category: "Organizational Governance and Management",
  explanation: "Proactive governance reduces the costs and risks of retrofitting accessibility and fosters awareness throughout the organization."
},
{
  id: 424,
  text: "According to the European Agency for Special Needs & Inclusive Education Guidelines, what should be included in an organization’s long-term strategy?",
  options: [
    { id: "a", text: "A short-term accessibility patch plan" },
    { id: "b", text: "An accessibility statement" },
    { id: "c", text: "A list of excluded accessibility features" },
    { id: "d", text: "A volunteer-based accessibility program only" }
  ],
  answer: "b",
  category: "Organizational Governance and Management",
  explanation: "The guidelines recommend including an accessibility statement in the organization’s long-term strategy."
},
{
  id: 425,
  text: "Which of the following is a W3C WAI 'Initiate' phase activity for planning web accessibility?",
  options: [
    { id: "a", text: "Evaluate early and regularly" },
    { id: "b", text: "Raise awareness and gather support" },
    { id: "c", text: "Monitor websites for compliance" },
    { id: "d", text: "Engage with stakeholders and review environment" }
  ],
  answer: "b",
  category: "Organizational Governance and Management",
  explanation: "The 'Initiate' phase includes raising awareness, learning the basics, setting objectives, and gathering support."
},
{
  id: 426,
  text: "What is the purpose of the Business Disability Forum Accessibility Maturity Model?",
  options: [
    { id: "a", text: "To certify organizations in accessibility compliance" },
    { id: "b", text: "To provide a self-assessment tool for tracking and planning accessibility progress" },
    { id: "c", text: "To eliminate the need for inclusive design practices" },
    { id: "d", text: "To measure only physical accessibility features" }
  ],
  answer: "b",
  category: "Organizational Governance and Management",
  explanation: "The Accessibility Maturity Model helps organizations assess and plan progress toward accessibility goals based on the Accessible Technology Charter."
},
{
  id: 427,
  text: "In the Capability Maturity Model, what characterizes Level 1: Initial?",
  options: [
    { id: "a", text: "Accessibility processes are documented and enforced" },
    { id: "b", text: "Accessibility capability is ad hoc and unstable" },
    { id: "c", text: "Continuous process improvement is embedded organization-wide" },
    { id: "d", text: "Accessibility is managed with measurable goals" }
  ],
  answer: "b",
  category: "Organizational Governance and Management",
  explanation: "Level 1 is 'Initial,' meaning accessibility is ad hoc, unstable, and not systematically addressed."
},
{
  id: 428,
  text: "Which factor is critical for an accessibility team’s success within an organization?",
  options: [
    { id: "a", text: "Support and commitment from the executive level" },
    { id: "b", text: "Isolating accessibility work from organizational processes" },
    { id: "c", text: "Leaving accessibility to outsourced vendors only" },
    { id: "d", text: "Treating accessibility as a one-time project" }
  ],
  answer: "a",
  category: "Organizational Governance and Management",
  explanation: "Executive-level support empowers the team, enforces policies, and signals organizational commitment to accessibility."
},
{
  id: 429,
  text: "What are the three main phases in which accessibility should be integrated in the web development process?",
  options: [
    { id: "a", text: "Design, Debug, Deploy" },
    { id: "b", text: "Research, Marketing, Release" },
    { id: "c", text: "Plan, Create, Test" },
    { id: "d", text: "Audit, Patch, Publish" }
  ],
  answer: "c",
  category: "Organizational Governance and Management",
  explanation: "Accessibility should be integrated into planning, creating, and testing — making it a continuous part of the development cycle."
},
{
  id: 430,
  text: "Why is accessibility considered a process management challenge, not just a technical challenge?",
  options: [
    { id: "a", text: "Because it requires one-time technical fixes only" },
    { id: "b", text: "Because it must be permanently embedded into design, development, and testing processes" },
    { id: "c", text: "Because laws only regulate management processes" },
    { id: "d", text: "Because accessibility is unrelated to technical implementation" }
  ],
  answer: "b",
  category: "Organizational Governance and Management",
  explanation: "Accessibility must be embedded across organizational processes, making it a change management and process management challenge."
},
{
  id: 431,
  text: "Which strategy is recommended for maintaining accessibility expertise in an organization?",
  options: [
    { id: "a", text: "Ignore accessibility training and rely solely on automated testing" },
    { id: "b", text: "Hire experts, outsource expertise, train teams, and hire people with disabilities" },
    { id: "c", text: "Delegate accessibility solely to junior staff without training" },
    { id: "d", text: "Only address accessibility when legal complaints arise" }
  ],
  answer: "b",
  category: "Organizational Governance and Management",
  explanation: "Maintaining expertise requires hiring or outsourcing experts, training teams, and including people with disabilities on staff."
},
{
  id: 432,
  text: "In the W3C WAI framework, what does the 'Sustain' phase emphasize?",
  options: [
    { id: "a", text: "Building skills and integrating accessibility goals" },
    { id: "b", text: "Monitoring, adapting to new technologies, and incorporating user feedback" },
    { id: "c", text: "Setting objectives and raising awareness" },
    { id: "d", text: "Assigning tasks and prioritizing issues" }
  ],
  answer: "b",
  category: "Organizational Governance and Management",
  explanation: "The 'Sustain' phase focuses on monitoring, adapting, tracking standards, and incorporating feedback to maintain accessibility long-term."
},
{
  id: 433,
  text: "Why is it important to define 'done' when managing accessibility projects?",
  options: [
    { id: "a", text: "Because accessibility is only needed once and then it’s complete" },
    { id: "b", text: "Because clear goals and milestones prevent wasted effort and loss of motivation" },
    { id: "c", text: "Because it removes the need for testing accessibility" },
    { id: "d", text: "Because it avoids involving accessibility experts" }
  ],
  answer: "b",
  category: "Scope Management",
  explanation: "Defining 'done' ensures clear goals, prevents wasted effort on minor issues, and helps maintain motivation throughout accessibility projects."
},
{
  id: 434,
  text: "Which of the following is NOT one of the four general categories for accessibility efforts?",
  options: [
    { id: "a", text: "Innovation" },
    { id: "b", text: "New Design" },
    { id: "c", text: "Retrofitting" },
    { id: "d", text: "Delegation" }
  ],
  answer: "d",
  category: "Scope Management",
  explanation: "The four categories are Innovation, New Design, Retrofitting, and Maintenance. Delegation is not a scope category."
},
{
  id: 435,
  text: "When defining scope for innovation efforts in accessibility, what is the most important first step?",
  options: [
    { id: "a", text: "Creating a clear problem statement or user story" },
    { id: "b", text: "Writing test scripts before identifying the problem" },
    { id: "c", text: "Skipping research to save time" },
    { id: "d", text: "Outsourcing the problem entirely" }
  ],
  answer: "a",
  category: "Scope Management",
  explanation: "Innovation efforts should start with a clear problem statement or user story to guide solutions that directly address the need."
},
{
  id: 436,
  text: "Why is accessibility easier in new design projects compared to retrofitting?",
  options: [
    { id: "a", text: "Because retrofitting does not require testing" },
    { id: "b", text: "Because accessibility can be built in from the beginning of the design process" },
    { id: "c", text: "Because new designs are exempt from accessibility laws" },
    { id: "d", text: "Because old designs are always impossible to fix" }
  ],
  answer: "b",
  category: "Scope Management",
  explanation: "New designs allow accessibility to be integrated from the start, which is easier and more effective than retrofitting."
},
{
  id: 437,
  text: "What question should be asked when deciding whether to retrofit an old design or start fresh?",
  options: [
    { id: "a", text: "Would it be cheaper to ignore accessibility?" },
    { id: "b", text: "Would it be better to fix the old design, or to start fresh with accessibility built in?" },
    { id: "c", text: "Can we avoid user testing by keeping the old design?" },
    { id: "d", text: "Is the existing design popular with executives?" }
  ],
  answer: "b",
  category: "Scope Management",
  explanation: "When retrofitting, teams should weigh the costs and benefits of fixing the old design versus starting fresh with accessibility built in."
},
{
  id: 438,
  text: "What is one of the first tasks when retrofitting old designs for accessibility?",
  options: [
    { id: "a", text: "Skip testing to save time" },
    { id: "b", text: "Create an inventory of everything that needs to be assessed" },
    { id: "c", text: "Only test new features" },
    { id: "d", text: "Remove accessibility features until later" }
  ],
  answer: "b",
  category: "Scope Management",
  explanation: "Retrofitting should begin with creating an inventory of items to assess for accessibility before prioritizing fixes."
},
{
  id: 439,
  text: "What tool was mentioned as useful for monitoring accessibility issues during the maintenance phase?",
  options: [
    { id: "a", text: "axe Monitor" },
    { id: "b", text: "Google Analytics" },
    { id: "c", text: "Photoshop" },
    { id: "d", text: "Excel" }
  ],
  answer: "a",
  category: "Scope Management",
  explanation: "axe Monitor can scan websites regularly to identify accessibility issues introduced during maintenance."
},
{
  id: 440,
  text: "What does the introduction of new accessibility problems during maintenance typically indicate?",
  options: [
    { id: "a", text: "That the accessibility process is strong and effective" },
    { id: "b", text: "That the team should wait until the next redesign to act" },
    { id: "c", text: "That there are weaknesses in the overall accessibility strategy" },
    { id: "d", text: "That automated testing is unnecessary" }
  ],
  answer: "c",
  category: "Scope Management",
  explanation: "If new problems keep appearing, it signals weaknesses in the overall accessibility strategy and processes, not just maintenance."
},
{
  id: 441,
  text: "Why is the question 'How much extra time does accessibility add?' considered a trick question?",
  options: [
    { id: "a", text: "Because accessibility always takes double the time of normal development" },
    { id: "b", text: "Because accessibility is only needed once per project" },
    { id: "c", text: "Because if accessibility is built in from the start, it becomes normal practice rather than extra work" },
    { id: "d", text: "Because accessibility cannot be measured in time" }
  ],
  answer: "c",
  category: "Time Management",
  explanation: "Accessibility isn’t 'extra' when it is integrated into normal workflows; it only feels extra when added later."
},
{
  id: 442,
  text: "In a best-case scenario with expert teams and efficient processes, accessibility may add how much time to development?",
  options: [
    { id: "a", text: "10% to 20%" },
    { id: "b", text: "25% to 30%" },
    { id: "c", text: "1% to 5%" },
    { id: "d", text: "50% or more" }
  ],
  answer: "c",
  category: "Time Management",
  explanation: "In best-case scenarios, accessibility tasks add only about 1% to 5% of the overall development time."
},
{
  id: 443,
  text: "What factors can cause accessibility work to double or triple the original development time?",
  options: [
    { id: "a", text: "A highly experienced team and mature processes" },
    { id: "b", text: "An immature process, inexperienced team, and very complex content" },
    { id: "c", text: "Simple static design and automated tools" },
    { id: "d", text: "Testing with only one browser and screen reader" }
  ],
  answer: "b",
  category: "Time Management",
  explanation: "When teams are inexperienced, processes immature, and content complex, accessibility tasks can balloon to 2–3x development time."
},
{
  id: 444,
  text: "What is the role of an Accessibility Lead or Coordinator?",
  options: [
    { id: "a", text: "To handle only the final QA testing" },
    { id: "b", text: "To manage the overall process, assign responsibilities, and provide expertise at every stage" },
    { id: "c", text: "To write marketing content" },
    { id: "d", text: "To train only executives" }
  ],
  answer: "b",
  category: "Time Management",
  explanation: "An Accessibility Lead coordinates the process, ensures responsibilities are met, and provides technical and strategic expertise."
},
{
  id: 445,
  text: "Which of the following is a major time-saving strategy for accessibility?",
  options: [
    { id: "a", text: "Skipping manual testing" },
    { id: "b", text: "Building and reusing a library of accessible widgets and patterns" },
    { id: "c", text: "Using only third-party prepackaged widgets" },
    { id: "d", text: "Delaying accessibility until after launch" }
  ],
  answer: "b",
  category: "Time Management",
  explanation: "A library of accessible widgets and methods saves time by allowing teams to reuse tested accessible components."
},
{
  id: 446,
  text: "Why does accessibility typically take longer when retrofitting old designs?",
  options: [
    { id: "a", text: "Because retrofitting requires ignoring accessibility laws" },
    { id: "b", text: "Because everything added for accessibility is additional work compared to building it in from the start" },
    { id: "c", text: "Because retrofitting eliminates the need for testing" },
    { id: "d", text: "Because old designs never require accessibility updates" }
  ],
  answer: "b",
  category: "Time Management",
  explanation: "Retrofitting means accessibility is added after the fact, so all tasks represent additional work."
},
{
  id: 447,
  text: "Which type of content usually adds significant time due to accessibility requirements like captions, transcripts, or audio descriptions?",
  options: [
    { id: "a", text: "Static images" },
    { id: "b", text: "Multimedia content" },
    { id: "c", text: "Simple text content" },
    { id: "d", text: "Navigation menus" }
  ],
  answer: "b",
  category: "Time Management",
  explanation: "Multimedia like videos require captions, transcripts, and sometimes audio descriptions, which are time-intensive to produce."
},
{
  id: 448,
  text: "Which testing environments are recommended as a subset that can catch most accessibility issues?",
  options: [
    { id: "a", text: "Chrome with NVDA, Chrome with JAWS, and Safari with VoiceOver" },
    { id: "b", text: "Internet Explorer with Narrator only" },
    { id: "c", text: "Firefox with any keyboard-only testing" },
    { id: "d", text: "Android with TalkBack only" }
  ],
  answer: "a",
  category: "Time Management",
  explanation: "Testing in Chrome with NVDA, Chrome with JAWS, and Safari with VoiceOver provides strong coverage for common accessibility issues."
},
{
  id: 449,
  text: "What is the ultimate goal for accessibility within organizations?",
  options: [
    { id: "a", text: "To treat accessibility as a special project for select products" },
    { id: "b", text: "To make accessibility 'business as usual' across all projects" },
    { id: "c", text: "To outsource accessibility entirely" },
    { id: "d", text: "To avoid accessibility unless legally required" }
  ],
  answer: "b",
  category: "Time Management",
  explanation: "The ultimate goal is for accessibility to become standard practice ('business as usual'), not an optional or special activity."
},  {
    id: 450,
    text: "Which disability model views disability primarily as a problem of the individual, requiring medical treatment or intervention?",
    options: [
      { id: "a", text: "Medical Model" },
      { id: "b", text: "Social Model" },
      { id: "c", text: "Biopsychosocial Model" },
      { id: "d", text: "Human Rights Model" }
    ],
    answer: "a",
    category: "Disability Models",
    explanation: "The Medical Model focuses on disability as an impairment or defect within the individual that requires medical treatment or cure."
  },
  {
    id: 451,
    text: "Which disability model emphasizes societal barriers as the main cause of disability?",
    options: [
      { id: "a", text: "Medical Model" },
      { id: "b", text: "Social Model" },
      { id: "c", text: "Charity Model" },
      { id: "d", text: "Functional Model" }
    ],
    answer: "b",
    category: "Disability Models",
    explanation: "The Social Model argues that disability is created by barriers in society—physical, attitudinal, and systemic—not by the impairment itself."
  },
  {
    id: 452,
    text: "The Biopsychosocial Model integrates which perspectives?",
    options: [
      { id: "a", text: "Medical and Economic" },
      { id: "b", text: "Social and Technological" },
      { id: "c", text: "Biological, Psychological, and Social" },
      { id: "d", text: "Legal and Political" }
    ],
    answer: "c",
    category: "Disability Models",
    explanation: "The Biopsychosocial Model combines biological, psychological, and social factors in understanding disability."
  },
  {
    id: 453,
    text: "The Human Rights Model of disability is most aligned with which international treaty?",
    options: [
      { id: "a", text: "Americans with Disabilities Act" },
      { id: "b", text: "Section 508" },
      { id: "c", text: "UN Convention on the Rights of Persons with Disabilities (CRPD)" },
      { id: "d", text: "WCAG 2.2" }
    ],
    answer: "c",
    category: "Disability Models",
    explanation: "The Human Rights Model aligns with the UN CRPD, emphasizing dignity, autonomy, and participation of persons with disabilities."
  },
  {
    id: 454,
    text: "Globally, approximately what percentage of the world’s population lives with a disability?",
    options: [
      { id: "a", text: "5%" },
      { id: "b", text: "10%" },
      { id: "c", text: "16%" },
      { id: "d", text: "25%" }
    ],
    answer: "c",
    category: "Disability Demographics",
    explanation: "According to the WHO and World Bank, over 1 billion people, about 16% of the world’s population, live with some form of disability."
  },
  {
    id: 455,
    text: "Which disability group is projected to increase most significantly with aging populations?",
    options: [
      { id: "a", text: "Hearing impairments" },
      { id: "b", text: "Intellectual disabilities" },
      { id: "c", text: "Autism spectrum disorders" },
      { id: "d", text: "Psychological disorders" }
    ],
    answer: "a",
    category: "Disability Demographics",
    explanation: "As populations age, hearing impairments are expected to rise sharply due to age-related hearing loss."
  },
  {
    id: 456,
    text: "Which European standard harmonizes accessibility requirements for ICT products and services?",
    options: [
      { id: "a", "text": "EN 301 549" },
      { id: "b", "text": "ISO 9001" },
      { id: "c", "text": "ISO 27001" },
      { id: "d", "text": "ATAG 2.0" }
    ],
    answer: "a",
    category: "Accessibility Standards",
    explanation: "EN 301 549 is the European accessibility standard that defines requirements for ICT to meet public procurement rules."
  },
  {
    id: 457,
    text: "ATAG (Authoring Tool Accessibility Guidelines) is intended for:",
    options: [
      { id: "a", text: "Screen reader manufacturers" },
      { id: "b", text: "Developers of content authoring tools like CMSs" },
      { id: "c", text: "Keyboard manufacturers" },
      { id: "d", text: "Video streaming services" }
    ],
    answer: "b",
    category: "Accessibility Standards",
    explanation: "ATAG provides guidance to ensure authoring tools like CMSs can be used by people with disabilities and also support creating accessible content."
  },
  {
    id: 458,
    text: "UAAG (User Agent Accessibility Guidelines) applies primarily to:",
    options: [
      { id: "a", text: "Search engines" },
      { id: "b", text: "Web browsers and media players" },
      { id: "c", text: "Payment gateways" },
      { id: "d", text: "Assistive technology vendors" }
    ],
    answer: "b",
    category: "Accessibility Standards",
    explanation: "UAAG defines how browsers and media players should support accessibility for end users and assistive technologies."
  },
  {
    id: 459,
    text: "Which ISO standard focuses specifically on accessibility in ICT products and services?",
    options: [
      { id: "a", text: "ISO 9241-171" },
      { id: "b", text: "ISO 27000" },
      { id: "c", text: "ISO 14000" },
      { id: "d", text: "ISO 45001" }
    ],
    answer: "a",
    category: "Accessibility Standards",
    explanation: "ISO 9241-171 provides guidance on designing software accessible to people with disabilities."
  },
{
  id: 470,
  text: "What does Section 508 of the Rehabilitation Act primarily focus on?",
  options: [
    { id: "a", text: "Employment accommodations" },
    { id: "b", text: "Accessible electronic and information technology for federal agencies" },
    { id: "c", text: "Education accommodations for students" },
    { id: "d", text: "Accessibility in transportation" }
  ],
  answer: "b",
  category: "Accessibility Standards and Laws",
  explanation: "Section 508 requires federal agencies to ensure electronic and information technology is accessible to people with disabilities."
},
{
  id: 471,
  text: "Which disability is most likely to benefit from captioning in video content?",
  options: [
    { id: "a", text: "Blindness" },
    { id: "b", text: "Hearing impairments" },
    { id: "c", text: "Mobility impairments" },
    { id: "d", text: "Cognitive impairments only" }
  ],
  answer: "b",
  category: "Assistive Technologies",
  explanation: "Captioning provides textual alternatives for audio, essential for users with hearing impairments."
},
{
  id: 472,
  text: "What does 'reasonable accommodation' mean in the context of disability rights?",
  options: [
    { id: "a", text: "Only accommodations that are inexpensive" },
    { id: "b", text: "Adjustments that do not impose undue hardship on an organization" },
    { id: "c", text: "Adjustments provided only when legally required" },
    { id: "d", text: "Changes made at the sole discretion of employers" }
  ],
  answer: "b",
  category: "Disability Rights",
  explanation: "Reasonable accommodations are changes that enable equal access without causing undue hardship to organizations."
},
{
  id: 473,
  text: "What is the primary purpose of WCAG?",
  options: [
    { id: "a", text: "Provide medical guidance for disability care" },
    { id: "b", text: "Set international standards for web accessibility" },
    { id: "c", text: "Outline employment rights" },
    { id: "d", text: "Define financial assistance programs" }
  ],
  answer: "b",
  category: "WCAG Principles",
  explanation: "WCAG establishes globally recognized standards for creating accessible web content."
},
{
  id: 474,
  text: "Which principle of Universal Design ensures that products accommodate a wide range of preferences and abilities?",
  options: [
    { id: "a", text: "Simple and Intuitive Use" },
    { id: "b", text: "Flexibility in Use" },
    { id: "c", text: "Perceptible Information" },
    { id: "d", text: "Low Physical Effort" }
  ],
  answer: "b",
  category: "Universal Design",
  explanation: "Flexibility in Use ensures that designs can accommodate diverse user needs and preferences."
},
{
  id: 475,
  text: "Which type of disability is most likely to benefit from screen readers?",
  options: [
    { id: "a", text: "Hearing impairments" },
    { id: "b", text: "Blindness or low vision" },
    { id: "c", text: "Mobility impairments" },
    { id: "d", text: "Cognitive impairments only" }
  ],
  answer: "b",
  category: "Assistive Technologies",
  explanation: "Screen readers convert text into speech or braille, supporting blind or low-vision users."
},
{
  id: 476,
  text: "Which international treaty emphasizes accessibility as a human right?",
  options: [
    { id: "a", text: "ADA" },
    { id: "b", text: "CRPD" },
    { id: "c", text: "Rehabilitation Act" },
    { id: "d", text: "WCAG" }
  ],
  answer: "b",
  category: "Accessibility Standards and Laws",
  explanation: "The UN Convention on the Rights of Persons with Disabilities (CRPD) frames accessibility as a fundamental human right."
},
{
  id: 477,
  text: "Which WCAG guideline ensures that users can operate content with only a keyboard?",
  options: [
    { id: "a", text: "Perceivable" },
    { id: "b", text: "Operable" },
    { id: "c", text: "Understandable" },
    { id: "d", text: "Robust" }
  ],
  answer: "b",
  category: "WCAG Principles",
  explanation: "The Operable principle ensures that all functionality is accessible via keyboard input."
},
{
  id: 478,
  text: "What is a common accessibility barrier for people with cognitive disabilities?",
  options: [
    { id: "a", text: "Low contrast text" },
    { id: "b", text: "Complex navigation and unclear instructions" },
    { id: "c", text: "Lack of captions" },
    { id: "d", text: "Absence of tactile graphics" }
  ],
  answer: "b",
  category: "Cognitive Disabilities",
  explanation: "Complex navigation and unclear instructions can create significant challenges for users with cognitive disabilities."
},
{
  id: 479,
  text: "Which of the following is an example of assistive technology for motor impairments?",
  options: [
    { id: "a", text: "Screen magnifier" },
    { id: "b", text: "Voice recognition software" },
    { id: "c", text: "Braille display" },
    { id: "d", text: "Captions" }
  ],
  answer: "b",
  category: "Assistive Technologies",
  explanation: "Voice recognition software allows individuals with limited motor control to operate computers via speech."
},
{
  id: 480,
  text: "Which Universal Design principle relates to minimizing fatigue in users?",
  options: [
    { id: "a", text: "Low Physical Effort" },
    { id: "b", text: "Size and Space for Approach and Use" },
    { id: "c", text: "Equitable Use" },
    { id: "d", text: "Tolerance for Error" }
  ],
  answer: "a",
  category: "Universal Design",
  explanation: "Low Physical Effort ensures products can be used comfortably with minimal fatigue."
},
{
  id: 481,
  text: "Why are alternative text descriptions important for accessibility?",
  options: [
    { id: "a", text: "They improve search engine ranking" },
    { id: "b", text: "They provide critical information for users who rely on screen readers" },
    { id: "c", text: "They replace captions in videos" },
    { id: "d", text: "They simplify navigation" }
  ],
  answer: "b",
  category: "Accessible Design Techniques",
  explanation: "Alt text ensures that users with visual impairments receive descriptions of images via assistive technologies."
},
{
  id: 482,
  text: "Which type of law requires accessibility compliance regardless of cost?",
  options: [
    { id: "a", text: "Reasonable accommodation law" },
    { id: "b", text: "Undue hardship clause" },
    { id: "c", text: "Absolute accessibility mandate" },
    { id: "d", text: "Universal Design standards" }
  ],
  answer: "c",
  category: "Accessibility Standards and Laws",
  explanation: "Absolute mandates require compliance regardless of cost, though most laws use a 'reasonable accommodation' standard."
},
{
  id: 483,
  text: "What is an example of perceptible information in Universal Design?",
  options: [
    { id: "a", text: "Captions for videos" },
    { id: "b", text: "Large physical buttons" },
    { id: "c", text: "Adjustable desks" },
    { id: "d", text: "Ramps instead of stairs" }
  ],
  answer: "a",
  category: "Universal Design",
  explanation: "Perceptible Information ensures communication is conveyed effectively, such as providing captions for audio content."
},
{
  id: 484,
  text: "Which disability type often benefits from simplified layouts and consistent navigation?",
  options: [
    { id: "a", text: "Blindness" },
    { id: "b", text: "Cognitive disabilities" },
    { id: "c", text: "Hearing impairments" },
    { id: "d", text: "Mobility impairments" }
  ],
  answer: "b",
  category: "Cognitive Disabilities",
  explanation: "Simplified layouts and consistent navigation reduce cognitive load for users with cognitive disabilities."
},
{
  id: 485,
  text: "Which technology provides refreshable tactile output for blind users?",
  options: [
    { id: "a", text: "Captions" },
    { id: "b", text: "Braille display" },
    { id: "c", text: "Screen magnifier" },
    { id: "d", text: "Speech-to-text" }
  ],
  answer: "b",
  category: "Assistive Technologies",
  explanation: "Braille displays convert text on a screen into tactile braille characters."
},
{
  id: 486,
  text: "Which principle of WCAG ensures content is adaptable to different technologies?",
  options: [
    { id: "a", text: "Perceivable" },
    { id: "b", text: "Operable" },
    { id: "c", text: "Understandable" },
    { id: "d", text: "Robust" }
  ],
  answer: "d",
  category: "WCAG Principles",
  explanation: "The Robust principle ensures content works reliably with assistive technologies and across platforms."
},
{
  id: 487,
  text: "Which accessibility testing method involves using actual assistive technologies to evaluate usability?",
  options: [
    { id: "a", text: "Automated testing" },
    { id: "b", text: "Manual code inspection" },
    { id: "c", text: "User testing with assistive tech" },
    { id: "d", text: "Unit testing" }
  ],
  answer: "c",
  category: "Testing and Evaluation",
  explanation: "Testing with assistive technologies ensures real-world accessibility beyond automated checks."
},
{
  id: 488,
  text: "Which law in the United States prohibits discrimination in employment for people with disabilities?",
  options: [
    { id: "a", text: "Section 504" },
    { id: "b", text: "Section 508" },
    { id: "c", text: "ADA Title I" },
    { id: "d", text: "Fair Housing Act" }
  ],
  answer: "c",
  category: "Accessibility Standards and Laws",
  explanation: "ADA Title I prohibits employment discrimination against qualified individuals with disabilities."
},
{
  id: 489,
  text: "Which group benefits the most from voice output on navigation apps?",
  options: [
    { id: "a", text: "People with hearing impairments" },
    { id: "b", text: "People with mobility impairments" },
    { id: "c", text: "People who are blind or have low vision" },
    { id: "d", text: "People with cognitive impairments only" }
  ],
  answer: "c",
  category: "Assistive Technologies",
  explanation: "Voice output navigation provides essential guidance for blind and low-vision users."
},{
  id: 490,
  text: "Which WCAG success criterion most directly addresses ensuring sufficient contrast between text and background?",
  options: [
    { id: "a", text: "1.1.1 Non-text Content" },
    { id: "b", text: "1.4.3 Contrast (Minimum)" },
    { id: "c", text: "2.1.1 Keyboard" },
    { id: "d", text: "3.1.1 Language of Page" }
  ],
  answer: "b",
  category: "WCAG Principles",
  explanation: "WCAG 2.1 SC 1.4.3 sets minimum contrast ratios for text to support readability, especially for users with low vision."
},
{
  id: 491,
  text: "Under the CPACC body of knowledge, disability is best understood as:",
  options: [
    { id: "a", text: "Solely an individual medical deficit" },
    { id: "b", text: "An outcome of interaction between individuals and barriers in the environment" },
    { id: "c", text: "A temporary condition only" },
    { id: "d", text: "A condition that applies only to mobility limitations" }
  ],
  answer: "b",
  category: "Disability Models",
  explanation: "CPACC emphasizes the social model where disability emerges from mismatches between people and environments."
},
{
  id: 492,
  text: "Which is the BEST example of embedding accessibility into governance?",
  options: [
    { id: "a", text: "Fixing accessibility issues only after launch" },
    { id: "b", text: "Creating an accessibility policy, assigning roles, and budgeting for accessibility" },
    { id: "c", text: "Relying exclusively on automated scanners" },
    { id: "d", text: "Using a single manual checklist once per year" }
  ],
  answer: "b",
  category: "Organizational Governance",
  explanation: "Effective governance formalizes policy, responsibility, and resourcing rather than ad-hoc fixes."
},
{
  id: 493,
  text: "Which assistive technology is most commonly used with MathML for STEM accessibility?",
  options: [
    { id: "a", text: "Voice recognition" },
    { id: "b", text: "Braille display via screen reader support" },
    { id: "c", text: "Switch scanning" },
    { id: "d", text: "Color filters" }
  ],
  answer: "b",
  category: "Assistive Technologies",
  explanation: "Screen readers can expose MathML to refreshable braille displays for accessible STEM content."
},
{
  id: 494,
  text: "In procurement, a VPAT primarily helps an organization:",
  options: [
    { id: "a", text: "Guarantee a product is fully compliant" },
    { id: "b", text: "Understand a vendor’s claimed conformance to accessibility requirements" },
    { id: "c", text: "Replace hands-on accessibility testing" },
    { id: "d", text: "Provide training to internal developers" }
  ],
  answer: "b",
  category: "Procurement",
  explanation: "A VPAT reports vendor claims about conformance; it should be verified with testing and review."
},
{
  id: 495,
  text: "Which phase of W3C WAI’s Planning & Managing Web Accessibility focuses on establishing monitoring and engaging stakeholders?",
  options: [
    { id: "a", text: "Initiate" },
    { id: "b", text: "Plan" },
    { id: "c", text: "Implement" },
    { id: "d", text: "Sustain" }
  ],
  answer: "d",
  category: "Organizational Governance",
  explanation: "The Sustain phase includes ongoing monitoring, stakeholder engagement, and adapting to change."
},
{
  id: 496,
  text: "Providing a 'Skip to main content' link primarily supports which user group?",
  options: [
    { id: "a", text: "Mouse-only users" },
    { id: "b", text: "Sighted keyboard users and screen reader users" },
    { id: "c", text: "Users with high color contrast needs" },
    { id: "d", text: "Voice-only users" }
  ],
  answer: "b",
  category: "Accessible Design Techniques",
  explanation: "Bypassing repetitive navigation benefits keyboard and screen reader users."
},
{
  id: 497,
  text: "Which success criterion addresses ensuring that functionality is available from a keyboard?",
  options: [
    { id: "a", text: "2.1.1 Keyboard" },
    { id: "b", text: "2.4.7 Focus Visible" },
    { id: "c", text: "1.3.1 Info and Relationships" },
    { id: "d", text: "3.3.1 Error Identification" }
  ],
  answer: "a",
  category: "WCAG Principles",
  explanation: "WCAG 2.1 SC 2.1.1 requires that all content functionality be operable via keyboard."
},
{
  id: 498,
  text: "From a time/cost perspective, which approach is MOST efficient?",
  options: [
    { id: "a", text: "Retrofitting accessibility after release" },
    { id: "b", text: "Embedding accessibility from the start and reusing tested components" },
    { id: "c", text: "Testing only with automated tools at the end" },
    { id: "d", text: "Outsourcing all development to avoid internal training" }
  ],
  answer: "b",
  category: "Project Management",
  explanation: "Designing accessibly from the beginning and reusing accessible patterns reduces total time and cost."
},
{
  id: 499,
  text: "Which is the BEST example of 'Perceivable' content?",
  options: [
    { id: "a", text: "A carousel that auto-rotates every 3 seconds" },
    { id: "b", text: "Audio-only announcements with no transcript" },
    { id: "c", text: "Images with meaningful alternative text" },
    { id: "d", text: "Form fields with no labels" }
  ],
  answer: "c",
  category: "WCAG Principles",
  explanation: "Perceivable content provides text alternatives for non-text content such as images."
},
{
  id: 500,
  text: "Which Universal Design principle is most related to forgiving user errors?",
  options: [
    { id: "a", text: "Equitable Use" },
    { id: "b", text: "Tolerance for Error" },
    { id: "c", text: "Flexibility in Use" },
    { id: "d", text: "Perceptible Information" }
  ],
  answer: "b",
  category: "Universal Design",
  explanation: "Tolerance for Error reduces hazards and adverse consequences of accidental or unintended actions."
},
{
  id: 501,
  text: "Which is a recommended practice when writing alt text?",
  options: [
    { id: "a", text: "Describe every decorative flourish" },
    { id: "b", text: "Repeat surrounding text for redundancy" },
    { id: "c", text: "Convey the image’s purpose or information succinctly" },
    { id: "d", text: "Always start with 'Image of…'" }
  ],
  answer: "c",
  category: "Accessible Design Techniques",
  explanation: "Alt text should capture the essential meaning/purpose; decorative images should have empty alt."
},
{
  id: 502,
  text: "What is the primary benefit of using headings with proper hierarchy (H1–H6)?",
  options: [
    { id: "a", text: "Improves CSS performance" },
    { id: "b", text: "Aids assistive tech navigation and content structure" },
    { id: "c", text: "Makes links blue by default" },
    { id: "d", text: "Eliminates the need for landmarks" }
  ],
  answer: "b",
  category: "Accessible Design Techniques",
  explanation: "Semantic headings enable efficient navigation for screen readers and support cognitive understanding."
},
{
  id: 503,
  text: "Which method helps reduce cognitive load for many users?",
  options: [
    { id: "a", text: "Dense paragraphs and jargon" },
    { id: "b", text: "Consistent navigation and plain language" },
    { id: "c", text: "Animations on every interaction" },
    { id: "d", text: "Color-only indicators for status" }
  ],
  answer: "b",
  category: "Cognitive Accessibility",
  explanation: "Consistency and plain language improve comprehension and reduce cognitive effort."
},
{
  id: 504,
  text: "For video accessibility, which pairing is MOST accurate?",
  options: [
    { id: "a", text: "Captions for blind users; audio description for deaf users" },
    { id: "b", text: "Captions for deaf/hard-of-hearing; audio description for blind/low-vision" },
    { id: "c", text: "Transcripts for color blindness; captions for motor impairments" },
    { id: "d", text: "No pairing is needed; video is inherently accessible" }
  ],
  answer: "b",
  category: "Multimedia Accessibility",
  explanation: "Captions convey audio to those who can’t hear; audio description conveys visuals to those who can’t see."
},
{
  id: 505,
  text: "Which statement about automated accessibility testing is TRUE?",
  options: [
    { id: "a", text: "It can detect 100% of accessibility issues" },
    { id: "b", text: "It’s unnecessary if manual testing is performed" },
    { id: "c", text: "It’s efficient for catching many issues but must be complemented by manual testing" },
    { id: "d", text: "It replaces user testing with assistive technologies" }
  ],
  answer: "c",
  category: "Testing and Evaluation",
  explanation: "Automation finds many issues quickly but cannot capture everything (e.g., alt quality, focus order)."
},
{
  id: 506,
  text: "Which practice MOST supports keyboard users on interactive components?",
  options: [
    { id: "a", text: "Removing focus outlines for aesthetics" },
    { id: "b", text: "Providing a visible focus indicator and logical tab order" },
    { id: "c", text: "Relying on mouseover events" },
    { id: "d", text: "Requiring drag-and-drop only" }
  ],
  answer: "b",
  category: "Accessible Design Techniques",
  explanation: "Visible focus and logical tab sequence are vital for keyboard navigation."
},
{
  id: 507,
  text: "Which is the BEST example of an acceptance criterion for accessible forms?",
  options: [
    { id: "a", text: "Form looks good visually" },
    { id: "b", text: "Each input has a programmatically associated label" },
    { id: "c", text: "Placeholders are used instead of labels" },
    { id: "d", text: "Labels appear only on hover" }
  ],
  answer: "b",
  category: "Quality Management",
  explanation: "Programmatic label association ensures labels are announced by assistive technologies."
},
{
  id: 508,
  text: "Which policy element MOST effectively prevents backsliding on accessibility?",
  options: [
    { id: "a", text: "One-time accessibility workshop" },
    { id: "b", text: "A clear policy with roles, recurring audits, and enforcement mechanisms" },
    { id: "c", text: "Relying on individual developer interest" },
    { id: "d", text: "Publishing a blog post about accessibility" }
  ],
  answer: "b",
  category: "Organizational Governance",
  explanation: "Sustained policy, accountability, and ongoing audits are necessary to maintain accessibility."
},
{
  id: 509,
  text: "When scoping a retrofit project, which step should come FIRST?",
  options: [
    { id: "a", text: "Publish a conformance claim immediately" },
    { id: "b", text: "Create an inventory and assess severity/priorities" },
    { id: "c", text: "Rewrite all content without analysis" },
    { id: "d", text: "Change the color palette site-wide" }
  ],
  answer: "b",
  category: "Project Management",
  explanation: "An inventory and assessment inform prioritization and efficient planning for remediation."
},{
  id: 510,
  text: "Which of the following is MOST aligned with Universal Design principle 'Flexibility in Use'?",
  options: [
    { id: "a", text: "Providing multiple ways to navigate a website (search, menus, site map)" },
    { id: "b", text: "Locking navigation to one linear sequence" },
    { id: "c", text: "Offering only voice input" },
    { id: "d", text: "Providing no user choice" }
  ],
  answer: "a",
  category: "Universal Design",
  explanation: "Flexibility in Use supports multiple methods of access so users can choose what works best."
},
{
  id: 511,
  text: "Which is a critical success factor when integrating accessibility into Agile workflows?",
  options: [
    { id: "a", text: "Waiting until the last sprint to check accessibility" },
    { id: "b", text: "Embedding accessibility checks into each sprint’s definition of done" },
    { id: "c", text: "Ignoring accessibility in MVPs" },
    { id: "d", text: "Conducting accessibility reviews only annually" }
  ],
  answer: "b",
  category: "Project Management",
  explanation: "Accessibility must be part of every sprint cycle to ensure consistent coverage."
},
{
  id: 512,
  text: "Which disability group benefits MOST directly from captions?",
  options: [
    { id: "a", text: "Users with low vision" },
    { id: "b", text: "Users who are deaf or hard of hearing" },
    { id: "c", text: "Users with dyslexia" },
    { id: "d", text: "Users with mobility impairments" }
  ],
  answer: "b",
  category: "Multimedia Accessibility",
  explanation: "Captions are designed for those who cannot hear the audio."
},
{
  id: 513,
  text: "Which section of the Americans with Disabilities Act (ADA) applies to public accommodations such as private businesses open to the public?",
  options: [
    { id: "a", text: "Title I" },
    { id: "b", text: "Title II" },
    { id: "c", text: "Title III" },
    { id: "d", text: "Title IV" }
  ],
  answer: "c",
  category: "Legal Frameworks",
  explanation: "Title III of the ADA covers private entities that operate places of public accommodation."
},
{
  id: 514,
  text: "What is a primary function of an Accessibility Maturity Model?",
  options: [
    { id: "a", text: "To measure how compliant an individual product is" },
    { id: "b", text: "To help organizations assess and plan their accessibility progress over time" },
    { id: "c", text: "To replace WCAG testing" },
    { id: "d", text: "To measure user satisfaction with a single feature" }
  ],
  answer: "b",
  category: "Organizational Governance",
  explanation: "Maturity models track organizational progress and help plan continuous improvement."
},
{
  id: 515,
  text: "Which WCAG principle does the requirement 'content must be operable via keyboard' fall under?",
  options: [
    { id: "a", text: "Perceivable" },
    { id: "b", text: "Operable" },
    { id: "c", text: "Understandable" },
    { id: "d", text: "Robust" }
  ],
  answer: "b",
  category: "WCAG Principles",
  explanation: "Keyboard accessibility is an aspect of the Operable principle."
},
{
  id: 516,
  text: "Why is hiring people with disabilities beneficial for accessibility efforts?",
  options: [
    { id: "a", text: "It satisfies a diversity quota" },
    { id: "b", text: "They provide first-hand expertise and perspectives on barriers" },
    { id: "c", text: "It reduces the need for accessibility training" },
    { id: "d", text: "It eliminates the need for QA testing" }
  ],
  answer: "b",
  category: "Human Resource Management",
  explanation: "People with disabilities bring authentic expertise that enhances accessibility design and evaluation."
},
{
  id: 517,
  text: "Which is the BEST way to verify a vendor’s accessibility claim?",
  options: [
    { id: "a", text: "Accept the vendor’s marketing brochure" },
    { id: "b", text: "Request a VPAT and perform independent testing" },
    { id: "c", text: "Rely only on third-party certifications" },
    { id: "d", text: "Assume compliance if vendor is large" }
  ],
  answer: "b",
  category: "Procurement",
  explanation: "Verification requires documentation and hands-on testing, not just claims."
},
{
  id: 518,
  text: "Which Universal Design principle aligns with providing information through multiple sensory modes (e.g., text, audio, visuals)?",
  options: [
    { id: "a", text: "Perceptible Information" },
    { id: "b", text: "Low Physical Effort" },
    { id: "c", text: "Simple and Intuitive Use" },
    { id: "d", text: "Size and Space for Approach" }
  ],
  answer: "a",
  category: "Universal Design",
  explanation: "Perceptible Information ensures communication is usable regardless of sensory ability."
},
{
  id: 519,
  text: "What is the main advantage of reusable accessible design patterns?",
  options: [
    { id: "a", text: "They eliminate all QA testing" },
    { id: "b", text: "They save time and ensure consistent accessibility across projects" },
    { id: "c", text: "They prevent developers from making design choices" },
    { id: "d", text: "They replace accessibility experts" }
  ],
  answer: "b",
  category: "Project Management",
  explanation: "Reusable patterns reduce repeated effort and promote consistency."
},
{
  id: 520,
  text: "Which factor contributes MOST to accessibility costs escalating?",
  options: [
    { id: "a", text: "Embedding accessibility early" },
    { id: "b", text: "Relying on reusable patterns" },
    { id: "c", text: "Retrofitting late in the process" },
    { id: "d", text: "Hiring an accessibility coordinator" }
  ],
  answer: "c",
  category: "Cost Management",
  explanation: "Late retrofitting is time-consuming and expensive compared to early integration."
},
{
  id: 521,
  text: "What is a key reason captions must be synchronized with audio?",
  options: [
    { id: "a", text: "To meet branding requirements" },
    { id: "b", text: "To ensure cognitive load is reduced and users can follow content in real time" },
    { id: "c", text: "To provide translations" },
    { id: "d", text: "To reduce video file size" }
  ],
  answer: "b",
  category: "Multimedia Accessibility",
  explanation: "Captions must be time-aligned to match the spoken audio accurately."
},
{
  id: 522,
  text: "Which is a benefit of user testing with people with disabilities?",
  options: [
    { id: "a", text: "It replaces all other QA activities" },
    { id: "b", text: "It provides real-world feedback on whether accessibility works in practice" },
    { id: "c", text: "It removes the need for automated testing" },
    { id: "d", text: "It guarantees WCAG certification" }
  ],
  answer: "b",
  category: "Quality Management",
  explanation: "Engaging real users validates accessibility beyond theoretical compliance."
},
{
  id: 523,
  text: "Which is an example of indirect discrimination under the UK Equality Act 2010?",
  options: [
    { id: "a", text: "Refusing to hire someone because they use a wheelchair" },
    { id: "b", text: "Applying a policy that requires all employees to attend meetings on the second floor without an elevator" },
    { id: "c", text: "Not providing captions for a training video" },
    { id: "d", text: "Harassing an employee because of their disability" }
  ],
  answer: "b",
  category: "Legal Frameworks",
  explanation: "Indirect discrimination occurs when a neutral policy disadvantages people with disabilities."
},
{
  id: 524,
  text: "Which procurement action MOST effectively pushes vendors to improve accessibility?",
  options: [
    { id: "a", text: "Ignoring accessibility until after purchase" },
    { id: "b", text: "Requiring accessibility compliance clauses in contracts" },
    { id: "c", text: "Accepting inaccessible products for lower cost" },
    { id: "d", text: "Assuming market forces will address it eventually" }
  ],
  answer: "b",
  category: "Procurement",
  explanation: "Including accessibility clauses in contracts ensures vendors treat accessibility as a deliverable."
},
{
  id: 525,
  text: "Which is an example of 'Tolerance for Error' in web design?",
  options: [
    { id: "a", text: "Allowing form submission only once" },
    { id: "b", text: "Providing clear error messages and recovery options" },
    { id: "c", text: "Disabling undo functions" },
    { id: "d", text: "Using timeouts with no warning" }
  ],
  answer: "b",
  category: "Universal Design",
  explanation: "Error tolerance includes clear feedback and recovery mechanisms."
},
{
  id: 526,
  text: "Which part of WCAG focuses on ensuring technologies are compatible with assistive technologies?",
  options: [
    { id: "a", text: "Perceivable" },
    { id: "b", text: "Operable" },
    { id: "c", text: "Understandable" },
    { id: "d", text: "Robust" }
  ],
  answer: "d",
  category: "WCAG Principles",
  explanation: "Robust content ensures compatibility with current and future user agents and assistive technologies."
},
{
  id: 527,
  text: "Which team role is MOST responsible for ensuring that accessibility is embedded in procurement processes?",
  options: [
    { id: "a", text: "UX designer" },
    { id: "b", text: "Procurement officer or contracts manager" },
    { id: "c", text: "Front-end developer" },
    { id: "d", text: "Marketing manager" }
  ],
  answer: "b",
  category: "Procurement",
  explanation: "Procurement professionals manage contracts and purchasing, and must include accessibility clauses."
},
{
  id: 528,
  text: "What is a risk of treating accessibility as an optional 'add-on' project?",
  options: [
    { id: "a", text: "It improves efficiency" },
    { id: "b", text: "It ensures sustainability" },
    { id: "c", text: "It leads to inconsistent results and higher costs" },
    { id: "d", text: "It eliminates the need for audits" }
  ],
  answer: "c",
  category: "Risk Management",
  explanation: "Accessibility must be embedded from the start; treating it as optional increases cost and risk."
},
{
  id: 529,
  text: "Which accessibility feature helps people with low vision customize visual presentation?",
  options: [
    { id: "a", text: "Fixed text size" },
    { id: "b", text: "Ability to zoom and reflow content" },
    { id: "c", text: "Images of text with no alternatives" },
    { id: "d", text: "Relying on color-only cues" }
  ],
  answer: "b",
  category: "Accessible Design Techniques",
  explanation: "Zoom and reflow allow flexible viewing for users with low vision."
}

















];