import { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { PER_PAGE } from './components/constList/constList';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import ImageGalleryItem from './components/ImageGalleryItem/ImageGalleryItem';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';
import { getImagesGallery } from './components/requests';
import SpinnerLoader from './components/Loader/Loader';

export default class App extends Component {
  state = {
    showModal: { isShow: false, src: null, alt: null },
    isLoading: false,
    querry: '',
    totalImg: null,
    currentPage: 1,
    imagesData: [],
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.querry !== this.state.querry ||
      prevState.currentPage !== this.state.currentPage
    ) {
      this.getQuerryData(this.state.querry, this.state.currentPage);
    }
  }

  handleSubmit = querryObj => {
    const { querry } = querryObj;

    if (!querry) {
      toast.error('Your querry is empty !', { position: 'top-right' });
      return;
    }

    this.setState({ querry: querry, currentPage: 1 });
  };

  async getQuerryData(querry, currPage) {
    this.setState({
      isLoading: true,
    });

    try {
      const imagesData = await getImagesGallery(querry, currPage);
      if (imagesData) {
        const { total, hits } = imagesData;

        if (!total) {
          toast.error('Images not find !', { position: 'top-right' });
          return;
        }

        const imagesObj = hits.map(hit => ({
          id: hit.id,
          min: hit.webformatURL,
          max: hit.largeImageURL,
          tags: hit.tags,
        }));

        if (currPage === 1) {
          this.setState({
            totalImg: total,
            currentPage: currPage,
            imagesData: imagesObj,
          });

          toast.success(`${total} images was find !`, {
            position: 'top-right',
          });
        }

        if (currPage > 1) {
          this.setState(prevState => ({
            currentPage: currPage,
            imagesData: prevState.imagesData.concat(imagesObj),
          }));
        }
      }
    } catch (error) {
      this.setState({ error });
    } finally {
      setTimeout(
        () =>
          this.setState({
            isLoading: false,
          }),
        500,
      );
    }
  }

  onClickLoadMoreBtn = () => {
    this.setState(prevState => ({ currentPage: prevState.currentPage + 1 }));
  };

  toggleModal = modalObj => {
    const { isShow } = this.state.showModal;
    this.setState({
      showModal: {
        isShow: !isShow,
        src: modalObj.max,
        alt: modalObj.tag,
      },
    });
  };

  modalClose = () => {
    this.setState({
      showModal: {
        isShow: false,
        src: null,
        alt: null,
      },
    });
  };

  render() {
    const { isShow } = this.state.showModal;
    const pageLeave =
      Math.ceil(this.state.totalImg / PER_PAGE) - this.state.currentPage;

    return (
      <>
        {isShow && (
          <Modal onShow={this.state.showModal} onClose={this.modalClose} />
        )}
        <Toaster />
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery images={this.state.imagesData} onClick={this.toggleModal}>
          <ImageGalleryItem />
        </ImageGallery>
        {this.state.isLoading && <SpinnerLoader />}
        {pageLeave >= 1 && <Button onClick={this.onClickLoadMoreBtn} />}
      </>
    );
  }
}
