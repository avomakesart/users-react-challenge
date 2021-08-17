import {
  Button,
  Container,
  Grid,
  Title,
  UserImage,
  UserInfo,
} from './components';

const mockData = {
  id: 1,
  email: 'george.bluth@reqres.in',
  first_name: 'George',
  last_name: 'Bluth',
  avatar: 'https://reqres.in/img/faces/1-image.jpg',
};

function App() {
  return (
    <>
      <Container>
        <Title>Our Team</Title>
        <Grid>
          <div className='flex-column items-center'>
            <UserImage url={mockData.avatar} alt={mockData.first_name} />
            <UserInfo
              fullName={`${mockData.first_name} ${mockData.last_name}`}
              email={mockData.email}
            />
          </div>

          <div className='flex-column items-center'>
            <UserImage url={mockData.avatar} alt={mockData.first_name} />
            <UserInfo
              fullName={`${mockData.first_name} ${mockData.last_name}`}
              email={mockData.email}
            />
          </div>

          <div className='flex-column items-center'>
            <UserImage url={mockData.avatar} alt={mockData.first_name} />
            <UserInfo
              fullName={`${mockData.first_name} ${mockData.last_name}`}
              email={mockData.email}
            />
          </div>

          <div className='flex-column items-center'>
            <UserImage url={mockData.avatar} alt={mockData.first_name} />
            <UserInfo
              fullName={`${mockData.first_name} ${mockData.last_name}`}
              email={mockData.email}
            />
          </div>
        </Grid>

        <div className='flex space-around mt-40'>
          <Button
            className='btn btn-sm'
            btnType='primary'
            type='button'
            onClick={() => console.log('prev')}
          >
            Prev users
          </Button>

          <Button
            className='btn btn-sm'
            btnType='primary'
            type='button'
            onClick={() => console.log('next')}
          >
            Next users
          </Button>
        </div>
      </Container>
    </>
  );
}

export default App;
