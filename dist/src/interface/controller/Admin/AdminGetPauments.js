"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminGetPauments = void 0;
const Payment_1 = require("../../../infra/database/Payment");
const Payments_1 = require("../../../infra/repository/Payments");
const FindPayment_1 = require("../../../app/usecase/admin/FindPayment");
const paymentDb = Payment_1.Payment;
const PaymentReopository = (0, Payments_1.PaymentIMP)(paymentDb);
const AdminGetPauments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const FoundedPaymentDetails = yield (0, FindPayment_1.FindPayment)(PaymentReopository);
        if (FoundedPaymentDetails) {
            res.status(200).json({ message: "Founded Successfully", FoundedPaymentDetails });
        }
        else {
            res.status(401).json({ message: "something went worng " });
        }
    }
    catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.AdminGetPauments = AdminGetPauments;
