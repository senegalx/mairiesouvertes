export type RegularPage = { 
  title: string,
  description?: string,
  meta_title?: string,
  image?: string
}

export type Feature = {
  subtitle: string,
  title: string,
  description: string,
  list: {
    icon: string,
    title: string,
    description: string,
  }[],
  button: Button
};

export type Testimonial = {
  name: string,
  avatar: string,
  company_logo: string,
  title: string,
  content: string,
  designation: string
}

export type Button = {
  enable: boolean;
  label: string;
  link: string;
};

export type Funfacts = {
  subtitle: string,
  title: string,
  description: string,
  list: {
    count: string,
    text?: string
  }[]
}

export type Call_to_action = {
  enable: boolean, 
  title: string, 
  image: string,
  buttons: {
    primary: Button,
    secondary: Button
  }
}

export type TeamMember = {
  name: string,
  avatar: string,
  content: string;
  socials: Array<{icon: string, link: string}>
}

