
import MenuTitleSlug from '@/components/MenuItem/MenuTitleSlug';
import { useRouter } from 'next/navigation';

const pageDS = () => {
	const router = useRouter();
	const { slug } = router.query;

	return <MenuTitleSlug slug={slug} />;
};

export default pageDS;
