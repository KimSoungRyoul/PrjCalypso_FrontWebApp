import React, {Component} from 'react';
import g2 from '../../asset/images/g2.jpg';

class DialogModal extends Component {

    render() {

        return (
            <div className="modal bnr-modal fade" id="myModal" tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span
                                aria-hidden="true">&times;</span></button>
                        </div>
                        <div className="modal-body modal-spa">
                            <img src={g2} className="img-responsive" alt=""/>
                            <h4>Consectetur adipiscing elit</h4>
                            <p>Donec fringilla lacus eu pretium rutrum. Cras aliquet congue ullamcorper. Etiam mattis
                                eros eu ullamcorper volutpat. Proin ut dui a urna efficitur varius. uisque molestie
                                cursus mi et congue consectetur adipiscing elit cras rutrum iaculis enim, Lorem ipsum
                                dolor sit amet, non convallis felis mattis at. Maecenas sodales tortor ac ligula
                                ultrices dictum et quis urna. Etiam pulvinar metus neque, eget porttitor massa vulputate
                                in.<br/> Fusce lacus purus, pulvinar ut lacinia id, sagittis eu mi. Vestibulum eleifend
                                massa sem, eget dapibus turpis efficitur at. Aliquam viverra quis leo et efficitur.
                                Nullam arcu risus, scelerisque quis interdum eget, fermentum viverra turpis. Itaque
                                earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores
                                alias consequatur aut At vero eos</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


}

export default DialogModal;