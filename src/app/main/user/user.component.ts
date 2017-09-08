import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../core/services/data.service';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { NotificationService } from '../../core/services/notification.service';
import { MessageConstants } from '../../core/common/message.constants';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @ViewChild('modalAddEdit') public modalAddEdit: ModalDirective;
  public pageIndex: number = 1;
  public pageSize: number = 20;
  public pageDisplay: number = 10;
  public totalRows: number;
  public filter: string = '';
  public users: any[];
  public entity: any;
  constructor(private _dataService: DataService, private notificationService: NotificationService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this._dataService.get('/api/appUser/getlistpaging?page=' + this.pageIndex + '&pageSize=' + this.pageSize + '&filter=' + this.filter)
      .subscribe((response: any) => {
        this.users = response.Items;
        this.pageSize = response.PageSize;
        this.totalRows = response.TotalRows;
        this.pageIndex = response.PageIndex;
      });
  }
  loadDetail(id: any) {
    this._dataService.get("/api/appUser/detail/" + id)
      .subscribe((response: any) => {
        this.entity = response;
        console.log(response);
      })
  }
  pageChanged(event: any): void {
    this.pageIndex = event.page;
    this.loadData();
  }
  showAddModal() {
    this.entity = {};
    this.modalAddEdit.show();
  }
  showEditModal(id: any) {
    this.loadDetail(id);
    this.modalAddEdit.show();
  }
  saveChange(formvalid: boolean) {
    if (formvalid) {
      if (this.entity.Id == undefined) {
        this._dataService.post("/api/appUser/add", JSON.stringify(this.entity))
          .subscribe((response: any) => {
            this.notificationService.printSuccessMessage(MessageConstants.CREATED_OK_MSG);
            this.modalAddEdit.hide();
            this.loadData();
          }, error => this._dataService.handleError(error));
      }
      else {
        this._dataService.put("/api/appUser/update", JSON.stringify(this.entity))
          .subscribe((response: any) => {
            this.notificationService.printSuccessMessage(MessageConstants.UPDATED_OK_MSG);
            this.modalAddEdit.hide();
            this.loadData();
          }, error => this._dataService.handleError(error));
      }
    }
  }
  showDeleteModal(id: any) {
    this.notificationService.printConfirmationDialog(MessageConstants.CONFIRM_DELETE_MSG, () => {
      this.deleteRole(id);
    })
  }
  deleteRole(id: any) {
    this._dataService.delete("/api/appUser/delete", "Id", id).subscribe((response: Response) => {
      this.notificationService.printSuccessMessage(MessageConstants.DELETED_OK_MSG);
      this.loadData();
    })
  }
}
