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
exports.PaymentDetailsCreated = void 0;
const CreatePaymentDetails_1 = require("../../../app/usecase/user/CreatePaymentDetails");
const Payment_1 = require("../../../infra/database/Payment");
const Payments_1 = require("../../../infra/repository/Payments");
const paymentDb = Payment_1.Payment;
const PaymentReopository = (0, Payments_1.PaymentIMP)(paymentDb);
const PaymentDetailsCreated = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { CourseId, coursePrice } = req.body;
        const User = req.userInfo;
        const UserId = User === null || User === void 0 ? void 0 : User.id;
        const createdPayments = yield (0, CreatePaymentDetails_1.addPayments)(PaymentReopository)(UserId, CourseId, coursePrice);
        if (createdPayments) {
            res.status(200).json({ message: "Founded successfull", createdPayments });
        }
        else {
            res.status(401).json({ message: "something went wrong" });
        }
    }
    catch (error) {
        res.status(501).json({ message: "ingernal server" });
    }
});
exports.PaymentDetailsCreated = PaymentDetailsCreated;
