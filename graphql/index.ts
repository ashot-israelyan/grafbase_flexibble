export const createProjectMutation = `
  mutation CreateProject($input: ProjectCreateInput!) {
    projectCreate(input: $input) {
      project {
        id
        title
        description
        createdBy {
          email
          name
        }
      }
    }
  }
`;

export const updateProjectMutation = `
  mutation UpdateProject($id: ID!, $input: ProjectUpdateInput!) {
    projectUpdate(by: { id: $id }, input: $input) {
      project {
        id
        title
        description
        createdBy {
          email
          name
        }
      }
    }
  }
`;

export const getUserQuery = `
  query GetUser($email: String!) {
    user(by: { email: $email }) {
      id
      name
      email
      avatarUrl
      description
      githubUrl
      linkedInUrl
    }
}
`;

export const createUserMutation = `
  mutation CreateUser($input: UserCreateInput!) {
    userCreate(input: $input) {
      user {
        id
        name
        email
        avatarUrl
        description
        githubUrl
        linkedInUrl
      }
    }
  }
`;
