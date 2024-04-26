export enum StatusAuth {
    CHECKING = 'checking',
    NOT_AUTHENTICATED = 'not-authenticated',
    AUTHENTICATED = 'authenticated',
  }


  export interface Account {
    id: string;
    userId: string;
    neighborhoodId: string;
    userStatus: string;
    user: {
      name: string;
      lastName: string;
      email: string;
      phone: string;
      imageUrl?: null | string;
    };
    neighborhood: {
      name: string;
      address: string;
      valueAdmin: number;
      code: string;
    };
  }
  
  export enum userStatusEnum {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
    WAITING = "WAITING",
    BLOCKED = "BLOCKED",
  }
  
  export interface Account {
    id: string;
    userId: string;
    neighborhoodId: string;
    userStatus: string;
    user: {
      name: string;
      lastName: string;
      email: string;
      phone: string;
      imageUrl?: null | string;
    };
    neighborhood: {
      name: string;
      address: string;
      valueAdmin: number;
      code: string;
    };
  }
  
  export interface DecodedToken {
    email: string;
    user_id: string;
    name: string;
    picture: string;
  }
  