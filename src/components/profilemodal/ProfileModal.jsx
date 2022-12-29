import { Modal, useMantineTheme } from '@mantine/core';
import './ProfileModal.css'

function ProfileModal({modalOpened, setModalOpened}) {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      size='55%'
      opened={modalOpened}
      onClose={()=>setModalOpened(false)}
    >
      <form className='info-form'>
        <h3>Your Info</h3>
        <div>
            <input 
            className='info-input' 
            type='text' 
            name='firstName' 
            placeholder='First Name'/>
            <input 
            className='info-input' 
            type='text' 
            name='lastName' 
            placeholder='Last Name'/>
        </div>
        <div>
        <input 
            className='info-input' 
            type='text' 
            name='workAt' 
            placeholder='Works At'/>
            <input className='info-input' type='date' name='DOB' placeholder='Date Of Birth'/>
        </div>
        <div>
          <input type='text' className='info-input' placeholder='Relationship Status'/>
        </div>
        <div>
        {/*Add select country */}
        <input 
            className='info-input' 
            type='text' 
            name='city' 
            placeholder='State/City'/>
            <input 
            className='info-input' 
            type='text' 
            name='country' 
            placeholder='Select Country'/>
        </div>
      </form>
    </Modal>
  );
} 
export default ProfileModal