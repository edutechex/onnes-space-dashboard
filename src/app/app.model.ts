export interface Contact_us {
    id : number
    name : string
    mailID : string
    yourMessage	: string
    date: Date
  }
export interface editNavItem{
  id : number
  navbarName : string
  navbarSubName : string
}
export interface addNavItem{
  navbarName : string
  navbarSubName : string
}
export interface editAboutUs{
  id : number
  imageFile : string
  content : string
}
export interface addAboutUs{
  imageFile : string
  content : string
}

export interface editTeam{
  id : number
  name : string
  designation : string
  about : string
}

export interface addTeam{
  name : string
  designation : string
  about : string
}