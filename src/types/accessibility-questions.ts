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
  }
];