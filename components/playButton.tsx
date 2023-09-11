import { Play } from 'lucide-react';
import { Button } from '@nextui-org/react';

const PlayButton = () => {
  return (
    <Button
      className='border-red-600 hover:bg-red-600'
      isIconOnly
      size='sm'
      variant={'flat'}
      radius='full'
    >
      <Play size={16} className='ms-0.5' />
    </Button>
  );
};

export default PlayButton;
